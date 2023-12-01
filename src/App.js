<<<<<<< HEAD
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
=======
import './App.css';
import Home from './pages/home/home';
import Product_display from './pages/product_display/product_display';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
import Checkout from './pages/Checkout/Checkout'
import Thankyou from './pages/ThankyouPage/Thankyou';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Cart from './pages/ShoppingCart/Cart';
import Account from './pages/account/account';
>>>>>>> 0c319a48e9fdf9f4c45dd0556d7598c993c2dfb7

function App() {
  return (
    <>
<<<<<<< HEAD
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
=======
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home/>}/> */}
        <Route index element={<Home/>}/>
        <Route element={<Home/>} path="/home"/>
        <Route element={<Product_display/>} path="/product"/>
        <Route element={<About/>} path="/About"/>
        <Route element={<Contact/>} path="/Contact"/>
        <Route element ={<Login/>} path="/login"/>
        {/* <Route element={<Register/>} path='/register'/> */}
        <Route element={<Checkout/>} path='/checkout'/>
        <Route element={<Thankyou/>} path='/thankyou'/>
        <Route element={<ErrorPage/>} path='/errorpage'/>
        <Route element={<Cart/>} path="/cart" />
        <Route element={<Account name="Tanmay"/>} path='/accounts'/>
      </Routes>
    </BrowserRouter>
>>>>>>> 0c319a48e9fdf9f4c45dd0556d7598c993c2dfb7
    </>
  );
}

export default App;
