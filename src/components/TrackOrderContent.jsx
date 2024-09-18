import React, { useState } from "react";
import "../index.css";

const TrackOrderContent = () => {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <section className=" mb-20 w-1/3 m-auto text-center">
      <h1 className="text-4xl font-oswald font-bold">Track Your Order</h1>

      <div className="mt-10">
        <div className="mt-5">
          <ul className="text-xl p-2 flex justify-around">
            <li
              className="Avenir hover:border-b-black cursor-pointer border-b-2"
              onClick={() => updateToggle(1)}
            >
              Order Number
            </li>
            <li
              className="Avenir hover:border-b-black cursor-pointer border-b-2"
              onClick={() => updateToggle(2)}
            >
              Tracking Number
            </li>
          </ul>
        </div>

        <div className={toggle === 1 ? "show-content" : "content"}>
          <div className="mt-5 flex flex-col w-full m-auto">
            <input
              className="pl-4 p-4 m-2 border-black border"
              type="mobile"
              placeholder="Order Number"
            />
            <input
              className=" pl-4 p-4 m-2 border-black border"
              type="email"
              placeholder="Email"
            />
            <button className="text-white font-bold bg-gray-500 m-2 p-2 border  border-black hover:bg-myGreen font-">
              Track
            </button>
          </div>
        </div>

        <div className={toggle === 2 ? "show-content" : "content"}>
          <div className="mt-5 flex flex-col w-full m-auto">
            <input
              className="pl-4 p-4 m-2 border-black border"
              type="mobile"
              placeholder="Tracking Number"
            />
            <button className="text-white m-2 p-2 border font-bold bg-gray-500 border-black hover:bg-myGreen font-">
              Track
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackOrderContent;
