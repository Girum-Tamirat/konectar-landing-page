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
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-start text-white"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <h1 className="font-Manrope font-semibold text-[2rem] ml-24 mr-52 md:text-[2.8rem] leading-tight md:leading-snug">
        Connecting Farms to Businesses: Nigeria's Leading Marketplace for Fresh Fruits and Vegetables
      </h1>
      <div className="mt-6 flex space-x-4 ml-24">
        <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
          Join the Waitlist
        </button>
        <button className="px-6 py-3 bg-transparent border border-green-600 text-white rounded-md hover:bg-green-600 hover:text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
