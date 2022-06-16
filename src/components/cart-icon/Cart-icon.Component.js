import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cardDropdown.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCardOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleCardOpen} />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
