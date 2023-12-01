import "./App.css";
import Home from "./pages/home/home";
import Product_display from "./pages/product_display/product_display";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Checkout from "./pages/Checkout/Checkout";
import Thankyou from "./pages/ThankyouPage/Thankyou";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ShoppingCart from "./pages/ShoppingCart/Cart";
import Account from "./pages/account/account";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Home/>}/> */}

          <Route index element={<Home />} />
          <Route element={<Home />} path="/home" />
          <Route element={<Product_display />} path="/product" />
          <Route element={<About />} path="/About" />
          <Route element={<Contact />} path="/Contact" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<Checkout/>} path='/checkout'/>
          <Route element={<Thankyou/>} path='/thankyou'/>
          <Route element={<ShoppingCart />} path="/cart" />
          <Route element={<Account name="Tanmay"/>} path="/account" />
          <Route element={<ErrorPage />} path="*" />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
