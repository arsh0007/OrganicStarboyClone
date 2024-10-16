import React from "react";
import "../index.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Subscribe = () => {
  return (
    <div className="bg-myGreen mt-10 pt-8 flex justify-center">
      <div className="flex flex-col text-center">
        <h1 className=" font-oswald text-4xl md:text-6xl leading-tight md:leading-normal">
          SUBSCRIBE TO OUR EMAILS
        </h1>
        <p className="font-Lato pt-3 text-sm md:text-base">
          Be the first to know about new collections and exclusive offers.
        </p>

        <div className="pt-5 pb-10">
          <div className="items-center w-5/6 sm:w-3/4 md:w-1/2 m-auto flex flex-row border-2 border-black">
            <input
              className="w-full px-5 py-3 bg-myGreen placeholder-black text-black"
              type="email"
              placeholder="Email"
            />
            <FaArrowRightLong className="ml-3 mr-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
