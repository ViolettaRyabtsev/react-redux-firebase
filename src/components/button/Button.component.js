//we know its 3 buttons
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./buttons.style.jsx";

export const Button_Types = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = Button_Types.base) =>
  ({
    [Button_Types.base]: BaseButton,
    [Button_Types.google]: GoogleSignInButton,
    [Button_Types.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton
      className={`button-container ${Button_Types[buttonType]}`}
      {...otherProps}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
