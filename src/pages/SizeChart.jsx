import React from "react";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import SizeChartContent from "../components/SizeChartContent";

const SizeChart = () => {
  return (
    <>
      <Navbar />
      <SizeChartContent />
      <Subscribe />
      <Footer />
    </>
  );
};

export default SizeChart;
