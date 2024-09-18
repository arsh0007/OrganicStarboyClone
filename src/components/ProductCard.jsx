import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image, hoverImage, title, price }) => {
  const [currentImage, setCurrentImage] = useState(image);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={"#"}
      className="m-4 p-4 "
      onMouseEnter={() => {
        setCurrentImage(hoverImage);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setCurrentImage(image);
        setIsHovered(false);
      }}
    >
      <img className="w-full" src={currentImage} alt={title} />
      <div>
        <div>
          <span
            className={`text-xl font-semibold text-gray-800 transition-all duration-100 ease-in ${
              isHovered ? "border-b-2 border-gray-800" : "border-b-0"
            }`}
          >
            {title}
          </span>
        </div>
        <p className="font-Lato text-lg font-medium text-gray-600">
          ${price} USD
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
