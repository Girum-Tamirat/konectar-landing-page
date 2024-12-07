import React from 'react';
import hunger from "../images/zero-hunger.png";
import hunger2 from "../images/zero-2.png";
import decent from "../images/decent-work.png";
import decent2 from "../images/decent-2.png";
import industry from "../images/industry-innovation.png";
import industry2 from "../images/innovation-2.png";
import responsible from "../images/responsible-consumption.png";
import responsible2 from "../images/responsible-2.png";

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
      default: industry,
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
    <section className="bg-[#003333] py-20">
      <h1 className="font-Manrope text-white text-[2rem] md:text-[2.8rem] font-bold mb-6 text-center">
        Konectar's SDG Mission
      </h1>
      <hr />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center mt-10 px-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="transition-all duration-500 ease-in-out"
          >
            <img
              className="h-[100%] w-[100%]"
              src={image.default}
              alt={image.alt}
              loading="lazy"
              onMouseOver={(e) => (e.currentTarget.src = image.hover)}
              onMouseOut={(e) => (e.currentTarget.src = image.default)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SDGMission;
