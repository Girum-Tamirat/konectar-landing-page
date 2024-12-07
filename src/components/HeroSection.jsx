import React, { useState, useEffect } from "react";
import image1 from "../images/hero1.png";
import image2 from "../images/hero2.png";
import image3 from "../images/hero3.png";
import image4 from "../images/hero4.png";
import image5 from "../images/hero5.png";

const HeroSection = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <section className="relative h-screen text-white text-left flex justify-start items-center lg:px-0 px-8 md:px-16 overflow-hidden">
      <img
        src={images[currentImageIndex]}
        alt="Hero Background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-none"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative w-full md:w-[54%] ml-0 md:ml-24 z-10 text-left">
        <h1 className="font-manrope font-semibold text-[2rem] md:text-[2.8rem] leading-tight md:leading-snug">
          Connecting Farms to Businesses: Nigeria's Leading Marketplace for Fresh Fruits and Vegetables
        </h1>
        <div className="flex gap-4 mt-6 font-Manrope items-start">
          <a href="/WaitingListForm">
            <button
              type="button"
              className="bg-[#009933] px-6 py-2 md:px-7 md:py-2.5 rounded-lg text-[0.8rem] md:text-[1rem]"
            >
              Join the Waitlist
            </button>
          </a>
          <button
            type="button"
            className="bg-transparent border-[#009933] border px-6 py-2 md:px-6 md:py-2.5 rounded-lg text-[0.8rem] md:text-[1rem]"
          >
            <a href="#">Learn More</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
