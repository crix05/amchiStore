import React, { useState } from "react";
import image1 from "./image.png";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";

const Register = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Header />

      <div className=" h-[100vh] py-12 flex justify-between items-center flex-wrap max-md:block   ">
        <div className="w-[49vw] h-full max-md:hidden flex items-center max-lg:hidden ">
          <img
            className="h-full w-full max-md:hidden max-sm-hidden max-lg:hidden"
            src={image1}
          />
        </div>
        <div className="w-[49vw] h-[80vh] max-md:w-full max-lg:w-full ">
          <div className="w-[50%]  m-auto max-lg:w-[50%] max-md:w-[80%]">
            <h2 className="text-3xl font-semibold pb-4">Create an Account</h2>
            <h5 className="sub-head text">Enter your details below</h5>
            <form className="py-12" onSubmit={handleSubmit}>
              <div>
                <input
                  className=" py-2 border-b border-gray-300 w-full focus:outline-none  mb-3"
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={username}
                  onChange={handleUsername}
                />
              </div>
              <div>
                <input
                  className=" py-2 border-b border-gray-300 w-full focus:outline-none  mb-3"
                  type="email"
                  id="email or phone no"
                  placeholder="Email or Phone Number"
                  value={email}
                  onChange={handleEmail}
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
              <div className=" my-4  w-full">
                <button
                  className="px-8  w-full py-2 text-white rounded-sm bg-black"
                  type="submit"
                >
                  Create Account
                </button>
                <div className=" w-full my-6 ">
                  <GoogleLogin
                    className="w-full text-center flex justify-center border border-black"
                    clientId="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"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
                <div className=" w-full flex justify-center">
                  <p className="px-1">Already have account?</p>
                  <p className="hover:border-b hover:border-b-black hover:cursor-pointer">
                    <Link to="/login">Log in</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
