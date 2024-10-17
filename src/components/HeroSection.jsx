import React, { useState } from "react";
import heroImage1 from "../assets/heroImage1.png";
import heroImage2 from "../assets/heroImage2.png";

const slides = [heroImage1, heroImage2];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-full sm:h-full md:h-full lg:h-full xl:h-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Button Section */}
      <section className="w-full flex justify-center items-center gap-6">
        <button
          onClick={handlePrev}
          className="text-black p-2 sm:p-3 md:p-4  focus:outline-none"
        >
          ‹
        </button>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-2 md:h-2 rounded-full ${index === currentSlide ? "bg-black" : "border border-black"
                }`}
            ></button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="text-black p-2 sm:p-3 md:p-4  focus:outline-none"
        >
          ›
        </button>
      </section>
    </div>
  );
};

export default HeroSlider;
