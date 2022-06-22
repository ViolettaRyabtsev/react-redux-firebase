import { useContext } from "react";
import { CartContext } from "../../context/cardDropdown.context";
import CheckOutItem from "../../components/checkout-item/CheckOutItem.component";
import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems, removeItemFromCart, cartTotal } = useContext(CartContext);

  console.log(removeItemFromCart);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          {" "}
          <span>Description</span>
        </div>
        <div className="header-block">
          {" "}
          <span>Quantity</span>
        </div>
        <div className="header-block">
          {" "}
          <span>Price</span>
        </div>
        <div className="header-block">
          {" "}
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total : {cartTotal} </span>
    </div>
  ); 
};

export default CheckOut;
