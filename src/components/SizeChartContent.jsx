import React from "react";
import tShirtImage from "../assets/sizeChart/TShirt.png";
import hoodiesImage from "../assets/sizeChart/hoodies.png";
import joogersImage from "../assets/sizeChart/Joggers.png";

const SizeChartContent = () => {
  const sizeImage = [
    { name: "T-Shirts:", image: tShirtImage },
    { name: "Hoodies:", image: hoodiesImage },
    { name: "Joggers:", image: joogersImage },
  ];

  return (
    <div className="font-oswald w-11/12 sm:w-3/4 md:w-1/2 m-auto pt-5">
      <h1 className="text-4xl md:text-7xl font-semibold">Size Charts</h1>
      <div className="pt-10 pb-10">
        {sizeImage.map((para, index) => (
          <div className="Avenir" key={index}>
            <p className="font-bold mt-5 text-lg md:text-2xl pb-3">{para.name}</p>
            <img src={para.image} className="w-full h-auto" alt={para.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeChartContent;
