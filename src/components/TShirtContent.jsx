import React from 'react'
import ProductCard from "./ProductCard";
import image1 from "../assets/tShirts/tShirt1.png";
import image2 from "../assets/tShirts/tShirt2.png";
import image3 from "../assets/tShirts/tShirt3.png";
import image4 from "../assets/tShirts/tShirt4.png";
import image5 from "../assets/tShirts/tShirt5.png";
import image6 from "../assets/tShirts/tShirt6.png";
import image7 from "../assets/tShirts/tShirt7.png";
import image8 from "../assets/tShirts/tShirt8.png";
import image9 from "../assets/tShirts/tShirt9.png";
import image10 from "../assets/tShirts/tShirt10.png";
import image11 from "../assets/tShirts/tShirt11.png";
import image12 from "../assets/tShirts/tShirt12.png";
import image13 from "../assets/tShirts/tShirt13.png";
import image14 from "../assets/tShirts/tShirt14.png";
import image15 from "../assets/tShirts/tShirt15.png";
import image16 from "../assets/tShirts/tShirt16.png";
import image17 from "../assets/tShirts/tShirt17.png";
import image18 from "../assets/tShirts/tShirt18.png";
import image19 from "../assets/tShirts/tShirt19.png";
import image20 from "../assets/tShirts/tShirt20.png";
import image21 from "../assets/tShirts/tShirt21.png";
import image22 from "../assets/tShirts/tShirt22.png";
import image23 from "../assets/tShirts/tShirt23.png";
import image24 from "../assets/tShirts/tShirt24.png";
import image25 from "../assets/tShirts/tShirt25.png";
import image26 from "../assets/tShirts/tShirt26.png";
import image27 from "../assets/tShirts/tShirt27.png";
import image28 from "../assets/tShirts/tShirt28.png";
import image29 from "../assets/tShirts/tShirt29.png";
import image30 from "../assets/tShirts/tShirt30.png";
import image31 from "../assets/tShirts/tShirt31.png";
import image32 from "../assets/tShirts/tShirt32.png";


const TShirtContent = () => {
  const products = [
    {
      image: image17,
      hoverImage: image18,
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
      image: image1,
      hoverImage: image2,
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
    {
      image: image25,
      hoverImage: image26,
      title: "Sailors Club T-Shirt",
      price: "39.99",
    },
    {
      image: image27,
      hoverImage: image28,
      title: "Sailors Club T-Shirt",
      price: "39.99",
    },
    {
      image: image29,
      hoverImage: image30,
      title: "Sailors Club T-Shirt",
      price: "39.99",
    },
    {
      image: image31,
      hoverImage: image32,
      title: "Sailors Club T-Shirt",
      price: "39.99",
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

export default TShirtContent
