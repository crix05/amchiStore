import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import image from "./image.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Header />
      <div className=" h-[100vh] py-12 flex justify-center items-center flex-wrap max-md:block   ">
        <div className="w-[49vw] h-full max-md:hidden  max-lg:hidden">
          <img
            className="h-full w-full max-md:hidden max-sm-hidden"
            src={image}
          />
        </div>
        <div className="w-[49vw] h-[40vh] max-md:w-full  max-lg:w-full">
          <div className="w-[50%]  m-auto max-lg:w-[60%] max-sm:w-[80%]   ">
            <h2 className="text-3xl font-semibold pb-4">Log in to Exclusive</h2>
            <h5 className="sub-head text">Enter your details below</h5>
            <form className="py-12" onSubmit={handleSubmit}>
              <div>
                <input
                  className=" py-2 border-b border-gray-300 w-full focus:outline-none  mb-3"
                  type="email"
                  id="email or phone no"
                  placeholder="Email or Phone no"
                  value={username}
                  onChange={handleUsername}
                />
              </div>

              <div>
                <input
                  className="py-2 border-b border-gray-300 w-full focus:outline-none  mb-3"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              <div className=" my-4 flex w-full  justify-between items-center h-16">
                <button
                  className="px-8  py-2 text-white rounded-sm bg-black"
                  type="submit"
                >
                  Log In
                </button>
                <h5 className="text-red-500">Forget Password</h5>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
