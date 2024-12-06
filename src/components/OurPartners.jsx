import React from "react";
import emery from "../images/emery.png"
import alx from "../images/alx.png"
import dida from "../images/dida.png"
import logistics from "../images/logistics.png"
import microsoft from "../images/microsoft.png"
import pik from "../images/pik.png"
import prep from "../images/prep.png"
import roi from "../images/roi.png"
import start from "../images/start.png"


function OurPartners() {
    return (
      <section className="font-Manrope bg-[#55BB77] py-5">
        <h1 className="text-[#0d2727] font-extrabold text-[2rem] md:text-[2.8rem] text-center">
          Our Partners
        </h1>
        <div className="overflow-hidden w-full">
          <div className="flex animate-scroll whitespace-nowrap">
            <div className="flex gap-14 md:gap-20 justify-center items-center mt-5 px-6 md:px-14 w-full">
              <img
                className="w-[30%] md:w-[20%]"
                src={emery}
                alt="Emery Logo"
              />
              <img
                className="w-[20%] md:w-[10%]"
                src={pik}
                alt="Pik Logo"
              />
              <img
                className="w-[30%] md:w-[20%]"
                src={microsoft}
                alt="Microsoft Logo"
              />
              <img
                className="w-[20%] md:w-[15%]"
                src={roi}
                alt="Roifarm Logo"
              />
              <img
                className="w-[30%] md:w-full"
                src={prep}
                alt="Prep Logo"
              />
              <img
                className="w-full"
                src={dida}
                alt="Dida Fresh Logo"
              />
              <img
                className="w-full"
                src={logistics}
                alt="Fresh Fruits Logistics Logo"
              />
              <img
                className="w-[10%] md:w-[20%]"
                src={alx}
                alt="alx Logo"
              />
              <img
                className="w-[25%] md:w-[20%]"
                src={start}
                alt="start-global Logo"
              />
              <img
                className="w-[30%] md:w-[20%]"
                src={emery}
                alt="Emery Logo"
              />
              <img
                className="w-[20%] md:w-[10%]"
                src={pik}
                alt="Pik Logo"
              />
              <img
                className="w-[30%] md:w-[20%]"
                src={microsoft}
                alt="Microsoft Logo"
              />
              <img
                className="w-[20%] md:w-[15%]"
                src={roi}
                alt="Roifarm Logo"
              />
              <img
                className="w-[30%] md:w-full"
                src={prep}
                alt="Prep Logo"
              />
              <img
                className="w-full"
                src={dida}
                alt="Dida Fresh Logo"
              />
              <img
                className="w-full"
                src={logistics}
                alt="Fresh Fruits Logistics Logo"
              />
              <img
                className="w-[10%] md:w-[20%]"
                src={alx}
                alt="alx Logo"
              />
              <img
                className="w-[25%] md:w-[20%]"
                src={start}
                alt="start-global Logo"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OurPartners