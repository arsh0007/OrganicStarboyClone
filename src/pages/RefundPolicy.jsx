import React from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RefundPolicyContent from "../components/RefundPolicyContent";

const RefundPolicy = () => {
  return (
    <div>
      <Navbar />
      <RefundPolicyContent />
      <Footer />
    </div>
  );
};

export default RefundPolicy;
