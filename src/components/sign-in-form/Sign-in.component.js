import { useState, useContext } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button.component";
import { UserContext } from "../../context/user.context";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-in.style.scss";
const defaultValue = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [signInObject, setSignInObject] = useState(defaultValue);
  const { email, password } = signInObject;
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setSignInObject(defaultValue);
  };

  const handelChange = (event) => {
    const { name, value } = event.target;
    setSignInObject({ ...signInObject, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      console.log(user, "user from sign n ");
      setCurrentUser(user);

      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-passord":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("user not found ");
          break;
        default:
          console.log(err);
      }
      //   if (err.message === "auth/wrong-password") {
      //     alert("incorrect password");
      //   } else if (err.message === "auth/user-not-found") {
      //     alert("user not found");
      //   }
      console.log(err);
    }
  };

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();

    console.log(response);
    console.log(response.user.uid);

    const userDocRef = await createUserDocumentFromAuth(response.user);
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={handelChange}
          name="email"
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handelChange}
          value={password}
          name="password"
          required
        />
        <div className="buttons-container">
          {" "}
          <Button type="submit">Sign In </Button>
          <Button type="button" onClick={logGoogleUser} buttonType="google">
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
