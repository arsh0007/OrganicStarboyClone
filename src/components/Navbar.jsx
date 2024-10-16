import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { FaBars, FaAngleDown, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Catalog", link: "#", hasDropdown: true },
    { name: "F.A.Q", link: "/faq", hasDropdown: false },
    { name: "Size Charts", link: "/size-chart", hasDropdown: false },
    { name: "Track Your Order", link: "/track-your-order", hasDropdown: false },
    { name: "Contact", link: "/contact", hasDropdown: false },
    { name: "About Us", link: "/about-us", hasDropdown: false },
  ];

  const catalogLink = [
    { name: "Hoodies", link: "/catalog/hoodies" },
    { name: "T-Shirts", link: "/catalog/t-shirt" },
    { name: "Joggers", link: "/catalog/joggers" },
  ];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className="bg-myGreen text-xl">
        <h1 className="py-2 font-medium text-center font-oswald">
          INTERNATIONAL SHIPPING - FREE OVER $120
        </h1>
      </div>
      <nav className="bg-white">
        <div className="flex justify-between items-center p-4 md:p-8">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-28 md:w-48" />
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="text-2xl md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Links for Desktop */}
          <ul className="hidden md:flex md:space-x-4">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={link.hasDropdown ? toggleDropdown : undefined}
                onMouseLeave={link.hasDropdown ? toggleDropdown : undefined}
              >
                {link.hasDropdown ? (
                  <div className="flex items-center cursor-pointer hover:text-black">
                    <span>{link.name}</span>
                    <FaAngleDown className="ml-1" />
                    {dropdownOpen && (
                      <ul className="absolute mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-10">
                        {catalogLink.map((catLink, catIndex) => (
                          <li key={catIndex} className="p-2 hover:bg-gray-100">
                            <Link to={catLink.link} className="block p-2">
                              {catLink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.link}
                    className="hover:text-black transition duration-300"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Icons Section for Desktop */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-black">
              <CiSearch className="text-2xl" />
            </a>
            <Link to="/cart" className="hover:text-black">
              <SlHandbag className="text-2xl" />
            </Link>
          </div>
        </div>

        {/* Sliding Menu for Mobile */}
        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out w-64 z-30 md:hidden`}
        >
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
          <ul className="p-4 space-y-4 mt-8">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="p-2"
                onClick={() =>
                  link.hasDropdown && setDropdownOpen(!dropdownOpen)
                }
              >
                {link.hasDropdown ? (
                  <div className="flex items-center cursor-pointer">
                    <span>{link.name}</span>
                    <FaAngleDown className="ml-1" />
                    {dropdownOpen && (
                      <ul className="mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-full">
                        {catalogLink.map((catLink, catIndex) => (
                          <li key={catIndex} className="p-2 hover:bg-gray-100">
                            <Link to={catLink.link} className="block">
                              {catLink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.link}
                    className="hover:text-black transition duration-300"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
