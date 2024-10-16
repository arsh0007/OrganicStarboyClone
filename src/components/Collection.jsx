import React from "react";
import ProductCard from "./ProductCard";
import image1 from "../assets/ProductCard/productCard1.png";
import image2 from "../assets/ProductCard/productCard2.png";
import image3 from "../assets/ProductCard/productCard3.png";
import image4 from "../assets/ProductCard/productCard4.png";
import image5 from "../assets/ProductCard/productCard5.png";
import image6 from "../assets/ProductCard/productCard6.png";
import image7 from "../assets/ProductCard/productCard7.png";
import image8 from "../assets/ProductCard/productCard8.png";
import image9 from "../assets/ProductCard/productCard9.png";
import image10 from "../assets/ProductCard/productCard10.png";
import image11 from "../assets/ProductCard/productCard11.png";
import image12 from "../assets/ProductCard/productCard12.png";
import image13 from "../assets/ProductCard/productCard13.png";
import image14 from "../assets/ProductCard/productCard14.png";
import image15 from "../assets/ProductCard/productCard15.png";
import image16 from "../assets/ProductCard/productCard16.png";
import image17 from "../assets/ProductCard/productCard17.png";
import image18 from "../assets/ProductCard/productCard18.png";
import image19 from "../assets/ProductCard/productCard19.png";
import image20 from "../assets/ProductCard/productCard20.png";
import image21 from "../assets/ProductCard/productCard21.png";
import image22 from "../assets/ProductCard/productCard22.png";
import image23 from "../assets/ProductCard/productCard23.png";
import image24 from "../assets/ProductCard/productCard24.png";

const Collection = () => {
  const products = [
    {
      image: image1,
      hoverImage: image2,
      title: "Organic Starboy Premium Hoodie",
      price: "74.99",
    },
    {
      image: image3,
      hoverImage: image4,
      title: "Starboy Leisure Club T-Shirt",
      price: "44.99",
    },
    {
      image: image5,
      hoverImage: image6,
      title: "L'exposition Hoodie",
      price: "69.99",
    },
    {
      image: image7,
      hoverImage: image8,
      title: "Organic Starboy Luxury Lifestyle T-Shirt",
      price: "39.99",
    },
    {
      image: image9,
      hoverImage: image10,
      title: "Organic Starboy Yacht Club Hoodie",
      price: "64.99",
    },
    {
      image: image11,
      hoverImage: image12,
      title: "High Altitude Club T-Shirt",
      price: "34.99",
    },
    {
      image: image13,
      hoverImage: image14,
      title: "Need Money For Porsche 2.0 T-Shirt",
      price: "34.99",
    },
    {
      image: image15,
      hoverImage: image16,
      title: "Organic Starboy Luxury Lifestyle Hoodie",
      price: "74.99",
    },
    {
      image: image17,
      hoverImage: image18,
      title: "High Altitude Club Joggers",
      price: "44.99",
    },
    {
      image: image19,
      hoverImage: image20,
      title: "Organic Starboy Yacht Club Half-Zip Sweater",
      price: "59.99",
    },
    {
      image: image21,
      hoverImage: image22,
      title: "Dirty Money T-Shirt",
      price: "34.99",
    },
    {
      image: image23,
      hoverImage: image24,
      title: "Sailors Club T-Shirt",
      price: "39.99",
    },
    // Add more products as needed
  ];

  return (
    <section className="pt-10 font-oswald">
      <h1 className="pl-4 md:pl-10 font-medium text-2xl md:text-3xl">Starboy Collection #2</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            hoverImage={product.hoverImage}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="font-lato bg-myGreen text-white rounded-lg py-2 px-8">
          View all
        </button>
      </div>
    </section>
  );
};

export default Collection;
