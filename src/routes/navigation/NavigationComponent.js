import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.style.jsx";

import CardDropdown from "../../components/card-dropdown/CardDropdown";

import CartIcon from "../../components/cart-icon/Cart-icon.Component";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cardDropdown.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  console.log(currentUser, "use context user");

  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              Sign out{" "}
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              Sign in
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen ? <CardDropdown /> : null}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
