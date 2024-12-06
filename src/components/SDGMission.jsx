import React from 'react';
import hunger from "../images/zero-hunger.png"
import hunger2 from "../images/zero-2.png"
import decent from "../images/decent-work.png"
import decent2 from "../images/decent-2.png"
import industry from "../images/industry-innovation.png"
import industry2 from "../images/innovation-2.png"
import responsible from "../images/responsible-consumption.png"
import responsible2 from "../images/responsible-2.png"

const SDGMission = () => {
  const images = [
    {
      default: hunger,
      hover: hunger2,
      alt: "SDG 2",
    },
    {
      default: decent,
      hover: decent2,
      alt: "SDG 8",
    },
    {
      default:industry,
      hover: industry2,
      alt: "SDG 9",
    },
    {
      default: responsible,
      hover: responsible2,
      alt: "SDG 12",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center mt-10 px-10">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative group w-full h-full transition-all duration-500 ease-in-out"
        >
          {/* Default Image */}
          <img
            className="h-full w-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
            src={image.default}
            alt={image.alt}
            loading="lazy"
          />
          {/* Hover Image */}
          <img
            className="h-full w-full object-cover absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
            src={image.hover}
            alt={`${image.alt} Hover`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default SDGMission;
