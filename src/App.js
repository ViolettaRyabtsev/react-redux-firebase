import { Routes, Route } from "react-router-dom"
import "./category.style.scss"
import Home from "./routes/home/HomeComponent"
import Navigation from "./routes/navigation/NavigationComponent"
import SignIn from "./routes/sign-in/SignInComponent"

const Shop=()=>{
return  <h2>shop here</h2>;
};

const App = () => {
  return (
    <Routes> 
      <Route path="/" element={<Navigation/>} >
         <Route index element={<Home/>} /> 
           <Route path="shop" element={<Shop/>}></Route>
           <Route path="sign-in" element={<SignIn/>}></Route>
      </Route> 
    </Routes>
  );
}

export default App;
