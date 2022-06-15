import "./card-dropdown.style.scss";
import Button from "../button/Button.component";

const CardDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button> Go to check out </Button>
      </div>
    </div>
  );
};

export default CardDropdown;
