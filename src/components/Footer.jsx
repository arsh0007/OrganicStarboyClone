import React from "react";
import { Link } from "react-router-dom";
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  const footerLink = [
    { name: "Terms Of Services", link: "/terms-of-service" },
    { name: "Refund Policy", link: "/refund-policy" },
    { name: "Privacy Policy", link: "/privacy-policy" },
  ];

  const socialIcon = [
    { name: <FaPinterest />, link: "#" },
    { name: <FaInstagram />, link: "#" },
    { name: <IoLogoTiktok />, link: "#" },
  ];

  return (
    <div className="w-full m-auto pt-12">
      <div className="text-center">
        {footerLink.map((link, index) => (
          <Link
            className="font-Lato hover:border-b-2 transition-all duration-300 ease-in-out border-gray-800 m-3"
            to={link.link}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="w-full m-auto pt-14 pb-14">
        <div className="justify-center flex flex-row ">
          {socialIcon.map((icon, index) => (
            <Link
              className="font-Lato hover:transition-all duration-300 ease-in-out m-3"
              to={icon.link}
            >
              {icon.name}
            </Link>
          ))}
        </div>
      </div>
      <hr />
      <div className="font-Lato text-center pt-14 pb-14">
            <p className="text-xs">&copy; 2024, Organic Starboy</p>
      </div>
    </div>
  );
};

export default Footer;
