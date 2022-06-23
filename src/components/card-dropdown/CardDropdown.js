import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./card-dropdown.style.jsx";
import Button from "../button/Button.component";
import CartItem from "../cart-item/CartItem.component";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cardDropdown.context";

import { useContext } from "react";
const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/check-out");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Shopping cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckOutHandler}>Check Out </Button>
    </CartDropDownContainer>
  );
};

export default CardDropdown;
