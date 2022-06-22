import { ShopContext } from "../../context/shop.context";
import { useContext, Fragment } from "react";

import CategoryPreview from "../../components/categoty-preview/Category-preview.component";

const CategoriesPreview = () => {
  const { categories } = useContext(ShopContext);

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
