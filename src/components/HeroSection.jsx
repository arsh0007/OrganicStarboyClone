import React, { useState } from 'react';
import heroImage1 from '../assets/heroImage1.png'; // Make sure the path is correct
import heroImage2 from '../assets/heroImage2.png'; // Make sure the path is correct

const slides = [heroImage1, heroImage2]; // Array of image imports

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
