import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { name: "Catalog", link: "#", hasDropdown: true },
    { name: "F.A.Q", link: "/faq" },
    { name: "Size Charts", link: "/size-chart" },
    { name: "Track Your Order", link: "/track-your-order" },
    { name: "Contact", link: "/contact" },
    { name: "About Us", link: "/about-us" },
  ];

  const catalogItems = [
    { name: "Hoodies", link: "/catalog/hoodies" },
    { name: "T-Shirts", link: "/catalog/t-shirt" },
    { name: "Joggers", link: "/catalog/joggers" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <div className="bg-myGreen font-oswald text-xl">
        <h1 className="py-2 text-center font-medium">
          INTERNATIONAL SHIPPING - FREE OVER $120
        </h1>
      </div>
      <nav className="bg-white shadow-lg">
        <div className="w-full mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Mobile Button (Left side on mobile) */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="mobile-menu-button">
                <svg
                  className="w-6 h-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>

            {/* Logo (Centered on mobile, left-aligned on desktop) */}
            <div className=" pl-5 flex-1 md:flex-none md:text-left text-center pr-10">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="inline-flex items-center py-5 px-2 text-black w-44 md:w-35"
                />
              </Link>
            </div>

            {/* Primary Nav (Hidden on mobile, visible on larger screens) */}
            <div className=" list-none hidden md:flex items-center space-x-4">
              {navLinks.map((item, index) => (
                <li key={index} className=" px-1 list-none relative group">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={toggleDropdown}
                        className="flex items-center"
                      >
                        {item.name}
                        <FaAngleDown className="ml-1" />
                      </button>
                      {dropdownOpen && (
                        <ul className="absolute list-none left-0 mt-2 bg-white shadow-lg rounded-lg p-2">
                          {catalogItems.map((cat, idx) => (
                            <li key={idx} className=" list-none py-1">
                              <Link
                                to={cat.link}
                                className="hover:bg-gray-200 p-2 block rounded"
                              >
                                {cat.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link to={item.link} className="hover:text-gray-700">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </div>

            {/* Icons (Search and Cart on all screens) */}
            <div className="ml-auto flex items-center space-x-4">
              {/* Search Icon */}
              <div className="relative flex items-center">
                <button
                  onClick={toggleSearch}
                  aria-label="Search"
                  className={isSearchActive ? "hidden" : "text-black"}
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
                {isSearchActive && (
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500 absolute right-0 top-0 mt-8"
                    autoFocus
                  />
                )}
                {isSearchActive && (
                  <button
                    onClick={toggleSearch}
                    className="absolute right-0 top-0 mt-8 mr-2 text-black"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
              {/* Cart Icon */}
              <button aria-label="Cart">
                <svg
                  className="w-6 h-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l1 4h13l1-4h2M7 10h14a1 1 0 011 1v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a1 1 0 011-1z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-y-0 left-0 w-2/5 bg-white z-50 transform ${
            isMobileMenuOpen ? "slide-in-left-active" : "-translate-x-full"
          } md:hidden`}
        >
          {/* Close Button (Top-right corner of the mobile menu) */}
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu} className="text-black">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* Menu Items */}
          <div className="list-none flex flex-col space-y-1 p-4">
            {navLinks.map((item, index) => (
              <li key={index} className="list-none">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="flex items-center justify-between w-full p-2 hover:bg-gray-200 rounded"
                    >
                      {item.name}
                      <FaAngleDown className="ml-1" />
                    </button>
                    {activeDropdown === index && (
                      <ul className="pl-4 mt-2 space-y-1">
                        {catalogItems.map((cat, idx) => (
                          <li key={idx}>
                            <Link
                              to={cat.link}
                              className="block hover:bg-gray-200 p-2 rounded"
                            >
                              {cat.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className="block p-2 hover:bg-gray-200 rounded"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
