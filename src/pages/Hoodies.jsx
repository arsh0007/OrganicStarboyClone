import React from "react";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import HoodiesContent from "../components/HoodiesContent";
import Navbar from "../components/Navbar";

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
