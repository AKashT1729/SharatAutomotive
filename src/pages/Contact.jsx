import React from "react";
import logo from "../assets/logo.jpg";
function Contact() {
  return (
    <>
      <div className="w-full min-h-screen ">
        <div>
          <h1 className="text-4xl lg:text-5xl font-semibold py-6 text-center">
            Contact
          </h1>
          <p className="text-base lg:text-lg text-gray-600 text-center px-4 lg:px-0">
            Feel free to reach out to us at any time.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row m-4 lg:m-10">
          <div className="left w-full lg:w-1/2 h-full">
            <div className="text-2xl font-semibold flex items-center space-x-3">
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-24 lg:h-24 lg:w-32 rounded-l-lg mx-auto lg:mx-0"
              />
              <span className="text-gray-950 text-center lg:text-left">
                Sharat Automotive
              </span>
            </div>

            <div className="w-full h-fit mt-5 flex justify-center lg:justify-start space-x-5 p-2">
              <a
                href="https://www.instagram.com/sharatautomotive?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="w-9 h-9 hover:text-red-600"
              >
                <i className="fi fi-brands-instagram"></i>
              </a>
              <a href="" className="w-8 h-8 hover:text-blue-600">
                <i className="fi fi-brands-facebook"></i>
              </a>
              <a href="" className="w-8 h-8 hover:text-red-600">
                <i className="fi fi-brands-youtube"></i>
              </a>
              <a href="" className="w-8 h-8 hover:text-blue-600">
                <i className="fi fi-brands-twitter"></i>
              </a>
            </div>
            <div className="pt-4 lg:pt-2 px-4 lg:px-0 text-center lg:text-left">
              <h2 className="text-xl font-semibold text-gray-900">
                Contact Information
              </h2>
              <p className="text-gray-600">
                MIDC Phace 2, Akola, Maharashtra 444001
              </p>
              <p className="text-gray-600">Phone: +91 77759 44485</p>
              <p className="text-gray-600">
                Email: sharad4597@gmail.com
              </p>
            </div>
          </div>

          <div className="map w-full lg:w-1/2 h-full mt-8 lg:mt-0">
            <iframe
              className="w-full h-64 lg:h-72"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d856.1408740055133!2d77.03479443109892!3d20.6887037930766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd72dd8f36e3ccb%3A0x76afafcf401b5081!2sSHARAT%20AUTOMOTIVE!5e0!3m2!1sen!2sin!4v1723381741911!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <footer className="bottom-0 text-center pt-20">
          <p>&copy; 2024 Akash Thakare. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Contact;
