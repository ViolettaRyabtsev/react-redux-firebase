import { Routes, Route } from "react-router-dom";
import "./category.style.scss";
import Home from "./routes/home/HomeComponent";
import Navigation from "./routes/navigation/NavigationComponent";
import Authentication from "./routes/authentication/Authtentication.component";
import Shop from "./routes/shop/Shop.component";
import CheckOut from "./routes/checkout/CheckOut.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="auth" element={<Authentication />}></Route>
        <Route path="check-out" element={<CheckOut />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
