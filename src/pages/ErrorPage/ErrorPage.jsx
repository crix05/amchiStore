import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Header />

      <div className="w-[80vw] h-[75vh] py-8 m-auto">
        <div className="py-4">
          <span>
            <Link to="/" className="hover:underline">Home</Link>
          </span>{" "}
          / <span className="font-semibold">404 Page</span>
        </div>
        <section className="w-full">
          <h1 className="text-7xl text-center py-8 pt-12">404 Not Found</h1>
        </section>
        <h1 className="text-center">
          Your visited page not found. You may go home page.
        </h1>
        <div className="m-auto w-60  flex justify-center py-12">
          <Link to="/" className="bg-black text-white py-2 px-4 rounded-sm text-md">Back to Home Page</Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ErrorPage;
