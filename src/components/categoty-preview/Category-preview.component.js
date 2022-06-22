import ProductCard from "../product-card/ProductCard";
import "./product-preview.style.scss";
const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
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
