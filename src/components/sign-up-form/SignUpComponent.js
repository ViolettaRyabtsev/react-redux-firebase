import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/FormInput";
import "./sign-up.form.style.scss";
import Button from "../button/Button.component";
import { UserContext } from "../../context/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmedPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmedPassword } = formFields;

  console.log("hit");

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //password match with confirmed password
    if (password !== confirmedPassword) {
      alert("password doesn't match");
      return;
    }
    try {
      const result = await createAuthUserWithEmailAndPassword(email, password);
      console.log(result.user, "user");

      setCurrentUser(result.user);

      await createUserDocumentFromAuth(result, { displayName });

      resetForm();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        console.log("email already in use");
      }
      console.log(err, "error");
    }
  };

  return (
    <div className="sign-up-container">
      <h2> Don't have an account? </h2>
      <span> SIGN UP WITH YOUR EMAIL AMD PASSWORD</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="display name"
          value={displayName}
          required
        />
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={displayName}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <FormInput
          label="Confirmed Password"
          type="password"
          onChange={handleChange}
          name="confirmedPassword"
          value={confirmedPassword}
          required
        />
        <Button type="submit"> Sign Up </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
