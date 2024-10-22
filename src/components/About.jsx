import React from "react";
import Spray from "../assets/spraygun.jpg";
function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row text-black max-h-screen mb-10 ">
        {/* Image Section */}
        <div className="w-full h-full  hidden lg:flex justify-center">
          <img src={Spray} alt="" className="w-96" />
        </div>

        {/* Text Section */}
        <div className="w-full px-3 lg:px-6">
          <h1 className="mb-4 text-4xl lg:text-5xl font-bold py-5 lg:ml-28">
            About <br />
            Sharat Automotive 
            
          </h1>
          <p className="mt-6 text-base lg:text-lg text-gray-600 lg:pr-20 lg:ml-28">
            Sharat Automotive Smith is a leading automotive dental and paint
            service company. Our expert team of dentists and technicians has
            been working together for over 20 years to create a unique and
            innovative approach to dental care. Our mission is to provide
            exceptional dental services that meet and exceed your expectations,
            and to create a positive impact on your car's overall appearance and
            performance.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
