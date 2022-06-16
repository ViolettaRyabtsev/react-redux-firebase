import SignUpForm from "../../components/sign-up-form/SignUpComponent";
import SignInForm from "../../components/sign-in-form/Sign-in.component";
import "./authentication.style.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      {/* <button onClick={signInWithGoogleRedirect}> Sign In with Google redirect </button> */}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
