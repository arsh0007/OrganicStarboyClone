import React from "react";

const contactForm = () => {
  return (
    <div className="Avenir w-1/2 m-auto">
      <h1 className="font-oswald mt-12 text-7xl font-semibold">Contact</h1>
      <form action="">
        <div className=" pt-14 gap-5 w-full flex flex-row ">
          <input
            className="p-2 pl-6 w-1/2 border border-gray-600 border-solid"
            type="Name"
            placeholder="Name"
          />
          <input
            className="p-2 pl-6 w-1/2 ml-2 border border-gray-600 border-solid"
            type="Email"
            placeholder="Email"
          />
        </div>
        <input
          className="p-2 pl-6 mt-5 w-full border text-black border-gray-600 border-solid"
          type="Phone"
          placeholder="Phone number"
        />
        <textarea
          className="pl-6 p-2 mt-5 w-full text-black border border-gray-600 border-solid"
          name="Comment"
          cols="100"
          rows="4"
          placeholder="Comment"
        ></textarea>
        <button className="mt-5 Avenir bg-myGreen border-none p-2 px-8">
          Send
        </button>
      </form>
    </div>
  );
};

export default contactForm;
