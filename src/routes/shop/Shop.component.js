import { ShopContext } from "../../context/shop.context";
import { useContext } from "react";
import "./shop.styles.scss";
import ProductCard from "../../components/product-card/ProductCard";
const Shop = () => {
  const { products } = useContext(ShopContext);

  console.log(products);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
