import { ShoppingIcon, IconContainer, ItemCount } from "./cart-icon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/cardDropdown.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCardOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <IconContainer>
      <ShoppingIcon className="shopping-icon" onClick={toggleCardOpen} />
      <ItemCount>{cartCount}</ItemCount>
    </IconContainer>
  );
};

export default CartIcon;
