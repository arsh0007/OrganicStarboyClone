import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav>
      <div className="bg-myGreen text-xl">
        <h1 className="pt-2 pb-2 font-medium text-center items-center font-oswald">
          INTERNATIONAL SHIPPING - FREE OVER $120
        </h1>
      </div>
      <div className="flex flex-row justify-between items-center bg-white ">
        <div className="flex flex-row items-center pl-10">
          <Link to="/">
            <img src={logo} alt="Logo" width={185} height={185} />
          </Link>

          <ul className="pl-10 flex flex-row list-none">
            {navLinks.map((link, index) => (
              <li
                className={`relative p-2 ${
                  link.hasDropdown ? "cursor-pointer" : ""
                }`}
                key={index}
                onClick={link.hasDropdown ? toggleDropdown : undefined}
              >
                {link.hasDropdown ? (
                  <div className="font-open flex items-center">
                    <span className="p-1 flex flex-row items-center hover:border-b-2 hover:border-black">
                      <Link to={link.link} className="hover:text-black">
                        {link.name}
                      </Link>
                      <FaAngleDown className="ml-1" />
                    </span>
                    {dropdownOpen && (
                      <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg w-48 z-10">
                        {catalogLink.map((catLink, catIndex) => (
                          <li key={catIndex} className="p-1 hover:bg-gray-100">
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
                    className="p-1 flex flex-row items-center hover:text-black transition-colors duration-300 hover:border-b-2 hover:border-black"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-row items-center pr-14">
          <a className="p-2" href="#">
            <CiSearch className="text-2xl hover:text-black transition-colors duration-300" />
          </a>
          <Link to="/cart" className="p-2">
            <SlHandbag className="text-2xl hover:text-black transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
