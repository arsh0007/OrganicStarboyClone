import React from "react";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import "../index.css";
import AboutUsContent from "../components/AboutUsContent";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <AboutUsContent />
      <Subscribe />
      <Footer />
    </>
  );
};

export default AboutUs;
