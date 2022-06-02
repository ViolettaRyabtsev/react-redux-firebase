import { Routes, Route, Outlet} from "react-router-dom"
import "./category.style.scss"
import Home from "./routes/home/HomeComponent"

const Navigation =()=>{
return (
<div>
  <div>
    <h1>im a naviagation bar</h1>
  </div>
  <Outlet/>
</div>
   );
};

const Shop=()=>{
return  <h2>shop here</h2>;
};

const App = () => {
  return (
    <Routes> 
      <Route path="/" element={<Navigation/>} >
         <Route index element={<Home/>} /> 
           <Route path="shop" element={<Shop/>}></Route>
      </Route> 
    </Routes>
  );
}

export default App;
