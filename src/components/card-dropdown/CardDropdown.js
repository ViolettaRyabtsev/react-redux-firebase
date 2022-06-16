import "./card-dropdown.style.scss";
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
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckOutHandler}>Go To Check Out </Button>
    </div>
  );
};

export default CardDropdown;
