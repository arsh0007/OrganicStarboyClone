import React from "react";
import { Link } from "react-router-dom";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  const footerLink = [
    { name: "Terms Of Services", link: "/terms-of-service" },
    { name: "Refund Policy", link: "/refund-policy" },
  ];

  const socialIcon = [
    { name: <FaPinterest />, link: "#" },
    { name: <FaInstagram />, link: "#" },
    { name: <IoLogoTiktok />, link: "#" },
  ];

  return (
    <div className="w-full m-auto pt-12 px-4">
      {/* Footer Links */}
      <div className="text-center flex flex-col md:flex-row md:justify-center">
        {footerLink.map((link, index) => (
          <Link
            key={index} // Add a key prop to each mapped element
            className="font-Lato hover:border-b-2 transition-all duration-300 ease-in-out border-gray-800 m-2 md:m-3"
            to={link.link}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Social Icons */}
      <div className="w-full m-auto pt-8 pb-4">
        <div className="flex justify-center space-x-4">
          {socialIcon.map((icon, index) => (
            <Link
              key={index} // Add a key prop to each mapped element
              className="font-Lato hover:transition-all duration-300 ease-in-out m-3 text-2xl"
              to={icon.link}
            >
              {icon.name}
            </Link>
          ))}
        </div>
      </div>

      <hr className="border-gray-300 my-4" />

      {/* Copyright */}
      <div className="font-Lato text-center pt-4 pb-14">
        <p className="text-xs md:text-sm">&copy; 2024, Organic Starboy</p>
      </div>
    </div>
  );
};

export default Footer;
