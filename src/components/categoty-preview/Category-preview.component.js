import ProductCard from "../product-card/ProductCard";
import "./product-preview.style.scss";
import { Link, useParams } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((__, index) => {
            return index < 4;
          })
          .map((item) => {
            return <ProductCard key={products.id} product={item} />;
          })}
      </div>
    </div>
  );
};
export default CategoryPreview;
