import Button, { Button_Types } from "../button/Button.component";
import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cardDropdown.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCard = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={Button_Types.inverted} onClick={addProductToCard}>
        ADD TO CARD
      </Button>
    </div>
  );
};

export default ProductCard;
