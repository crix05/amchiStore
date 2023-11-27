import React, { createContext } from "react";
import { Products } from "./Products";
import ContextCart from "./ContextCart";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

export const CartContext = createContext();

const Cart = () => {
  // const[item,setItem]=useState(Products);

  return (
    <>
      <CartContext.Provider value={Products}>
        <Header />
        <ContextCart />
        <Footer />
      </CartContext.Provider>
    </>
  );
};

export default Cart;
