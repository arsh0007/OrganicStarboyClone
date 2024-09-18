import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrackOrderContent from "../components/TrackOrderContent";

const TrackYourOrder = () => {
  return (
    <>
      <Navbar />
      <TrackOrderContent />
      <Footer />
    </>
  );
};

export default TrackYourOrder;
