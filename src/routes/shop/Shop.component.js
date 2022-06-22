import { ShopContext } from "../../context/shop.context";
import { useContext } from "react";
import "./shop.styles.scss";
import CategoriesPreview from "../category-preview/categories-preview.component";
import { Routes, Route } from "react-router-dom";
import Category from "../category/category.component";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}>
        {" "}
      </Route>
    </Routes>
  );
};

export default Shop;
