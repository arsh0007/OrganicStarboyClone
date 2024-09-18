import React from "react";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import HoodiesContent from "../components/HoodiesContent";

const Hoodies = () => {
  return (
    <div>
      <Navbar />
      <HoodiesContent />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Hoodies;
