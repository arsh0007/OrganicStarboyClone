import React from "react";

const AboutUsContent = () => {
  const AboutPara = [
    {
      para: "Welcome to Organic Starboy, a clothing brand that combines style, quality, and personality in every piece. Our mission is to provide you with unique and trendy clothing that helps you express yourself in a unique and fashionable way. The starboy way.",
    },

    {
      para: "At Organic Starboy, we believe that fashion is more than just a way to cover your body - it's a lifestyle, the starboy lifestyle that we want to create and influence all over the world. That's why our collections are designed with creativity and originality in mind. ",
    },

    {
      para: "Our brand was founded by a team of fashion enthusiasts who wanted to create a clothing line that inspires people to be confident and authentic. We understand that clothing is not just about following the latest trends - it's about expressing your unique personality and style. That's why we work hard to ensure that every item we produce is of the highest quality.",
    },

    {
      para: "We are constantly looking for ways to improve and expand our brand, and we are committed to providing our customers with the best possible shopping experience. Our customer service team is always available to answer your questions.",
    },

    {
      para: "Thank you for choosing Organic Starboy. We are honored to be a part of your fashion journey, and we look forward to helping you unlock your inner starboy",
    },
  ];
  
  return (
    <div className="font-oswald w-1/2 m-auto pt-5">
      <h1 className="text-7xl font-semibold">About us</h1>
      <div className="pt-9 pb-8">
        {AboutPara.map((para, index) => (
          <p className=" pt-6 Avenir">{para.para}</p>
        ))}
      </div>
    </div>
  );
};

export default AboutUsContent;
