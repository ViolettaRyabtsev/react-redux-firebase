import { useState, useEffect, createContext } from "react";
import SHOP_DATA from "../shop-data.js";
import {
  addCollectionDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";

export const ShopContext = createContext({
  categories: {},
});

export const ShopProvider = ({ children }) => {
  const [categories, setProducts] = useState({});
  const value = { categories };
  console.log(getCategoriesAndDocuments()); //

  useEffect(() => {
    const productMap = async () => {
      const categories = await getCategoriesAndDocuments();
      console.log(categories);
      if (categories) {
        setProducts(categories);
      }
    };
    productMap();
  }, []);
  // useEffect(() => {
  //   addCollectionDocuments("categories", SHOP_DATA);
  // }, []);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
