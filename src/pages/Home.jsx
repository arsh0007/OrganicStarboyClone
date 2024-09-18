import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Collection from "../components/Collection";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Collection />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
