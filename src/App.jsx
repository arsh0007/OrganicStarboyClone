import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import SizeChart from "./pages/SizeChart";
import TrackYourOrder from "./pages/TrackYourOrder";
import Hoodies from "./pages/Hoodies";
import Tshirt from "./pages/Tshirt";
import Joggers from "./pages/Joggers";
import Cart from "./pages/Cart";
import TermsOfServices from "./pages/TermsOfServices";
import RefundPolicy from "./pages/RefundPolicy";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/hoodies" element={<Hoodies />} />
          <Route path="/catalog/t-shirt" element={<Tshirt />} />
          <Route path="/catalog/joggers" element={<Joggers />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/size-chart" element={<SizeChart />} />
          <Route path="/track-your-order" element={<TrackYourOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/terms-of-service" element={<TermsOfServices />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/product-detail" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
