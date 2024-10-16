import React from "react";

const ContactForm = () => {
  return (
    <div className="Avenir w-11/12 sm:w-3/4 md:w-1/2 m-auto">
      <h1 className="font-oswald mt-12 text-4xl sm:text-5xl md:text-7xl font-semibold">Contact</h1>
      <form action="">
        <div className="pt-14 gap-5 w-full flex flex-col sm:flex-row">
          <input
            className="p-2 pl-6 w-full sm:w-1/2 border border-gray-600 border-solid mb-4 sm:mb-0"
            type="text"
            placeholder="Name"
          />
          <input
            className="p-2 pl-6 w-full sm:w-1/2 border border-gray-600 border-solid"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="p-2 pl-6 mt-5 w-full border text-black border-gray-600 border-solid"
          type="tel"
          placeholder="Phone number"
        />
        <textarea
          className="pl-6 p-2 mt-5 w-full text-black border border-gray-600 border-solid"
          name="Comment"
          cols="30"
          rows="4"
          placeholder="Comment"
        ></textarea>
        <button className="mt-5 Avenir bg-myGreen border-none p-2 px-8 text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
