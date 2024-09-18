import React from "react";
import Navbar from "../components/Navbar";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Contact;
