import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import image2 from "./lcd.jpg";
import image3 from "./led.jpg";
import image4 from "./Visa.png";
import image5 from "./mastercard.png";
import image6 from "./Nagad.png";
import image7 from "./card.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const Nav = useNavigate();
  return (
    <>
      <Header />

      <div className="w-[80vw] min-h-[80vh] py-8 m-auto">
        {/* <div className="py-4">
          <span>
            <Link to="/" className="hover:underline">
              Account
            </Link>
          </span>
          {"  "}/
          <span>
            <Link to="/" className="hover:underline">
              My Account
            </Link>
          </span>
          {"  "}/
          <span>
            <Link to="/" className="hover:underline">
              Product
            </Link>
          </span>
          {"  "}/
          <span>
            <Link to="/" className="hover:underline">
              View cart
            </Link>
          </span>
          {"  "}/<span className="font-semibold">Checkout</span>
        </div> */}
        <div className="py-8 w-full flex justify-between flex-wrap ">
          <div className="w-1/3 max-md:w-full">
            <h2 className=" text-3xl font-bold pb-8">Billing Details</h2>
            <form className="">
              <div className="">
                <h1 className="text-[#9cacca] py-2">First Name</h1>
                <input
                  className="focus:outline-none bg-[#f5f5f5] text-[#8595b1] py-2 px-4 w-full mb-4 rounded-md"
                  type="text"
                />
              </div>

              <div className="">
                <h1 className="text-[#9cacca] py-2">Company Name</h1>
                <input
                  className="focus:outline-none bg-[#f5f5f5] text-[#8595b1] py-2 px-4 w-full mb-4 rounded-md"
                  type="text"
                />
              </div>

              <div className="">
                <h1 className="text-[#9cacca] py-2">Street Address</h1>
                <input
                  className="focus:outline-none bg-[#f5f5f5] text-[#8595b1] py-2 px-4 w-full mb-4 rounded-md"
                  type="text"
                />
              </div>

              <div className="">
                <h1 className="text-[#9cacca] py-2">
                  Apartment,floor,etc(optional)
                </h1>
                <input
                  className="focus:outline-none bg-[#f5f5f5] text-[#8595b1] py-2 px-4 w-full mb-4 rounded-md"
                  type="text"
                />
              </div>

              <div className="">
                <h1 className="text-[#9cacca] py-2">Town/City</h1>
                <input
                  className="focus:outline-none bg-[#f5f5f5] text-[#8595b1] py-2 px-4 w-full mb-4 rounded-md"
                  type="text"
                />
              </div>

              <div className="">
                <h1 className="text-[#9cacca] py-2">Phone Number</h1>
                <input
                  className="focus:outline-none bg-[#f5f5f5] text-[#8595b1] py-2 px-4 w-full mb-4 rounded-md"
                  type="tel"
                />
              </div>

              <div className="">
                <h1 className="text-[#9cacca] py-2">Email Address</h1>
                <input
                  className="focus:outline-none bg-[#f5f5f5] text-[#8595b1] py-2 px-4 w-full mb-4 rounded-md"
                  type="text"
                />
              </div>

              <div className="flex items-center text-sm py-3 ">
                <label className="flex items-center">
                  <input
                    className="mx-2 w-4 h-4 accent-red-400 "
                    type="checkbox"
                    name="sentence"
                    value="Fin Rot"
                  />
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          <div className="w-2/3 px-40 py-16 max-xl:px-24 max-md:w-full max-md:px-8">
            <div className="">
              <div className="flex justify-between items-center">
                <div className="flex items-center my-4">
                  <img className="" src={image2} />
                  <p className="mx-4">LCD Monitor</p>
                </div>

                <div className="">
                  <p className="">$650</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center my-8">
                  <img className="" src={image3} />
                  <p className="mx-4">LCD Monitor</p>
                </div>

                <div className="">
                  <p className="">$650</p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex justify-between items-center py-3">
                <p className="">Sub Total:</p>
                <p className="">$1750</p>
              </div>
              <hr />

              <div className="flex justify-between items-center py-3">
                <p className="">Shipping:</p>
                <p className="">Free</p>
              </div>
              <hr />

              <div className="flex justify-between items-center py-3">
                <p className="">Total:</p>
                <p className="">$1750</p>
              </div>
            </div>

            <div className=" py-8">
              <div className=" flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                    className="w-4 h-4"
                  />
                  <label for="html" className="mx-2">
                    Bank
                  </label>
                </div>
                <br /> 
                <div className="flex justify-around w-1/2 items-center">
                  <img src={image4} className="h-5" />
                  <img src={image5} className="h-5" />
                  <img src={image6} className="h-5" />
                  <img src={image7} className="h-5 " />
                </div>
              </div>
              <div className="flex items-center my-2">
                <input
                  type="radio"
                  id="css"
                  name="fav_language"
                  value="CSS"
                  className="w-4 h-4"
                />
                <label for="css" className="mx-2">Cash on delivery</label>
                <br />
              </div>
            </div>

            <div className="">
              <div className="flex justify-between items-center flex-wrap">
                <input className="py-3 px-3 w-[70%] rounded-sm focus:outline-none border border-neutral-400 max-xl:w-full my-3" type="text" placeholder="Coupan Code" />
                <button className="text-center px-3 py-3 bg-black text-white max-md:w-full">Apply Coupan</button>
              </div>
              <div className="my-8">
                <button className="w-1/2 p-3  bg-black text-white rounded-sm max-md:w-full max-lg:w-3/4" onClick={()=>{Nav('/thankyou'); window.scroll(0,0)}}>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
