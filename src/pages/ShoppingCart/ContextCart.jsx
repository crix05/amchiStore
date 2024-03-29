import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";
import "./cart.css";
import { CartContext } from "./Cart";
import { Link } from "react-router-dom";

const ContextCart = () => {
  const item = useContext(CartContext);
  //    const [item,setItem] = useState();
  const Nav = useNavigate();

  return (
    <>
      <div className="w-[80vw] min-h-[80vh] py-8 m-auto">
        {/* <div className="py-4">
          <span>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </span>{" "}
          / <span className="font-semibold">Cart</span>
        </div> */}
        <div className="px-8 py-2 mb-3 mt-8 flex border-2 border-neutral-200 rounded-md w-full justify-between items-center overflow-x-scroll scrollbar-hide ">
          <h3 className="min-w-[300px] max-md:min-w-[200px] max-md:max-w-[200px]">
            Product
          </h3>
          <h3 className="min-w-[200px] max-md:min-w-[100px]">Price</h3>
          <h3 className="min-w-[200px] max-md:min-w-[100px] text-center">
            Quantity
          </h3>
          <h3 className="min-w-[200px] max-md:min-w-[100px] text-right">
            Subtotal
          </h3>
        </div>

        <div className="  h-[40vh] py-4 overflow-y-scroll scrollbar-hide ">
          {item.map((currItem) => {
            return <Item key={currItem.id} {...currItem} />;
          })}
        </div>
        <div className="py-8 flex w-full justify-between items-center">
          <button className="border border-neutral-400 rounded-sm text-sm py-2 px-8 max-sm:px-5">
            Return to Shop
          </button>
          <button className="border border-neutral-400 rounded-sm text-sm py-2 px-8 max-sm:px-5">
            Update cart
          </button>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className=" w-1/2  flex flex-wrap max-sm:w-full  max-lg:w-full max-lg:py-8 ">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border focus:outline-none w-1/2 h-12 border-neutral-400 rounded-sm max-lg:flex-col  text-sm py-2 px-8 max-sm:px-2 max-sm:w-full max-sm:my-3 "
            />

            <button className="border mx-3 bg-black h-12 text-white rounded-sm text-md py-2 px-8 max-sm:mx-0 max-sm:w-full max-sm:my-3">
              Apply Coupon
            </button>
          </div>
          <div className="rounded-sm w-1/3 max-lg:w-full px-4 Cart_van">
            <h1 className="text-lg font-bold py-4">Card Total</h1>
            <div>
              <div className="py-4 flex w-full justify-between items-center border-b border-b-neutral-200">
                {" "}
                <h1>Subtotal</h1>
                <h1>$1200</h1>
              </div>
              <div className="py-4 flex w-full justify-between items-center border-b border-b-neutral-200">
                {" "}
                <h1>Shipping</h1>
                <h1>Free</h1>
              </div>
              <div className="py-4 flex w-full justify-between items-center">
                {" "}
                <h1>Total</h1>
                <h1>$1200</h1>
              </div>
            </div>
            <div className="w-full flex justify-center mt-4" onClick={()=>{Nav('/checkout'); window.scroll(0,0)}}>
              <button className="text-center cart_check_button">Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContextCart;
