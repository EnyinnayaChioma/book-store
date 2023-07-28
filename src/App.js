import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Project/Home/home";
import Hero from "./Project/Hero/hero";
import About from "./Project/AboutSection/about";
import Productdetails from "./Project/ProductDetails/productdetails";
import Signin from "./Project/SignIn/signin";
import Signup from "./Project/SignUp/signup";
import Contact from "./Project/Contact/contact"
import Cart from "./Project/Cart/cart";
import { useState, React } from "react";
import { MyContext } from "./MyContext";

function App() {
  const [productData, setProductData] = useState([]);
  const [badge, setBadge] = useState(0);
  const [addCart, setAddCart] = useState([]);




  return (
    <>
    <MyContext.Provider value={{ productData, setProductData, badge, setBadge, addCart, setAddCart }}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Hero" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Productdetails" element={<Productdetails />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </MyContext.Provider>

    </>
  );
}

export default App;
