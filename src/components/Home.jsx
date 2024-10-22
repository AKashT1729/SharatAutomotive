import React from "react";
import Spline from "@splinetool/react-spline";
import Button from "./Button";
import About from "./About";
import Services from "./Services";
import Contact from "../pages/Contact";
import GoogleReviewsWidget from "./GoogleReviewsWidget";
function Home() {
  return (
    <>
      {" "}
      <div className="flex flex-col lg:flex-row text-black min-h-screen pt-16 lg:pt-1">
        <div className="w-full lg:w-1/2 mt-8 lg:mt-36 px-6 lg:px-12">
          <h1 className="mb-4 ml-10 text-4xl lg:text-5xl font-bold">
            Sharat Automotive 
          </h1>
          <p className="mt-6 ml-10 text-base lg:text-lg text-gray-600">
            Revitalize your vehicle with our expert dent and paint services,
            ensuring a flawless finish every time. Say goodbye to unsightly
            scratches with our advanced scratch removal techniques. Trust us to
            bring your car back to its pristine condition, making it look brand
            new.
          </p>
          <div className="mt-8 ml-10 flex justify-start space-x-4 lg:space-x-12">
            <Button />
          </div>
        </div>
        <div className="w-full lg:w-1/2  ">
          <Spline scene="https://prod.spline.design/y5sERgZn9CsOGPjr/scene.splinecode" />
        </div>
      </div>
      <About />
      <Services />
      <GoogleReviewsWidget/>
      <Contact />
    </>
  );
}

export default Home;
