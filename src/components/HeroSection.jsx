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
    <section className="relative w-full h-60 sm:h-80 md:h-[60vh] lg:h-[80vh] xl:h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4 sm:px-8">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white p-1 sm:p-2 md:p-3 lg:p-4 rounded-lg hover:bg-gray-700 focus:outline-none"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white p-1 sm:p-2 md:p-3 lg:p-4 rounded-lg hover:bg-gray-700 focus:outline-none"
        >
          ›
        </button>
      </div>

      {/* Optional indicator dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              index === currentSlide ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
