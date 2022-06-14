import { useState, useEffect, createContext } from "react";
import data from "../shop-data.json";

export const ShopContext = createContext({
  products: [],
});

export const ShopProvider = ({ children }) => {
  const [products, setPoducts] = useState([]);
  const value = { products };

  useEffect(() => {
    setPoducts(...products, data);
  }, []);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
