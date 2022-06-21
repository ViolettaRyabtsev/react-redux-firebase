import { useContext } from "react";
import { CartContext } from "../../context/cardDropdown.context";

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(
    CartContext
  );
  return (
    <div>
      <h1>Check Out Page</h1>
      <div>
        {cartItems.map((cartItem) => (
          <div>
            <h2>{cartItem.name}</h2>
            <span>{cartItem.quantity}</span>
            <span onClick={() => removeItemFromCart(cartItem)}>decrement</span>
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckOut;
