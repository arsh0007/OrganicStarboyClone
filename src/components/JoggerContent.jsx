import React from 'react'
import ProductCard from "./ProductCard";
import image1 from "../assets/Joggers/jogger1.png";
import image2 from "../assets/Joggers/jogger2.png";
import image3 from "../assets/Joggers/jogger3.png";
import image4 from "../assets/Joggers/jogger4.png";
import image5 from "../assets/Joggers/jogger5.png";
import image6 from "../assets/Joggers/jogger6.png";
import image7 from "../assets/Joggers/jogger7.png";
import image8 from "../assets/Joggers/jogger8.png";
import image9 from "../assets/Joggers/jogger9.png";
import image10 from "../assets/Joggers/jogger10.png";
import image11 from "../assets/Joggers/jogger11.png";
import image12 from "../assets/Joggers/jogger12.png";

const JoggerContent = () => {
  const products = [
    {
      image: image1,
      hoverImage: image12,
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

  ];
  return (
    <section className="pt-10 font-oswald">
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 p-6">
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
      <div className="flex justify-center">
        <button className="font-Lato bg-myGreen border-none p-2 px-8">View all</button>
      </div>
    </section>
  )
}

export default JoggerContent
