import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
// import { FaXmark, FaBars } from "react-icons/fa6";
import { FaTimes, FaBars } from "react-icons/fa";
import Button from "./Button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Services", path: "/services" },
    { link: "Contacts", path: "/contacts" },
  ];

  return (
    <header className="w-full bg-white md:bg-transparent  rounded-lg z-50 ">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky ? "sticky top-0 left-0 border-b bg-white duration-300" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={logo} alt="Logo" className="w-20 h-12 rounded-l-lg" />
            <span className="text-gray-950">Sharat Automotive </span>
          </Link>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block text-center text-base text-gray-950 hover:text-[#FFC300] first:font-medium"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <Button />
          </div>

          <div className="md:hidden z-50">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:text-gray-700 relative"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6 z-50" />
              ) : (
                <FaBars className="h-6 w-6 z-50" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-4 py-7 bg-[#FFC300] ${
            isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              key={path}
              className="block text-base text-gray-950 hover:text-[#FFC300] first:font-medium"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
