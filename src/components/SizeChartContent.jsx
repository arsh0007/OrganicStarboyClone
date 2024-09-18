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
    <div className="font-oswald w-1/2 m-auto pt-5">
      <h1 className="text-7xl font-semibold">Size Charts</h1>
      <div className="pt-20 pb-10">
        {sizeImage.map((para, image) => (
          <div className="Avenir">
            <p className="font-bold mt-10 pb-8">{para.name}</p>
            <img src={para.image} className="w-full" width={100} height={100} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeChartContent;
