import React from "react";
import "../index.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Subscribe = () => {
  return (
    <div className="bg-myGreen mt-10 pt-8 flex justify-center">
      <div className="flex flex-col text-center">
        <h1 className="subscribeh1 font-oswald  ">SUBSCRIBE TO OUR EMAILS</h1>
        <p className="font-Lato pt-3">
          Be the first to know about new collections and exclusive offers.
        </p>

        <div className="   pt-5 pb-10">
          <div className="items-center w-1/2 m-auto flex flex-row border-2 border-black ">
          <input
            className=" w-full max-w-80 px-5 py-3 bg-myGreen placeholder-black text-black"
            type="email"
            placeholder="Email"
          />
          <FaArrowRightLong className="ml-3 mr-3"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
