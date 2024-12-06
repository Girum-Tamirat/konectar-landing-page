import React from "react";

function ProductsFeatures() {
  const features = [
    {
      title: "Mobile-Friendly Interface",
      description:
        "Access the marketplace anytime, anywhere through our user-friendly mobile platform, designed for ease of use on the go.",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 320 512"
          height="35"
          width="35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
        </svg>
      ),
    },
    {
      title: "Centralized Marketplace with Data Insights",
      description:
        "Connect with verified buyers and sellers instantly, facilitating seamless transactions for fresh fruits and vegetables while getting valuable market insights, pricing trends, and performance analytics.",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="35"
          width="35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
        </svg>
      ),
    },
    {
      title: "Escrow Payment Services",
      description:
        "Secure transactions with our built-in escrow payment system, ensuring that payments are only released when both parties are satisfied.",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="35"
          width="35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V10H9.00488V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V12H22.0049V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2Z" />
        </svg>
      ),
    },
    {
        title: "Buyer & Supplier Matching",
        description:
        "Smart matching algorithms that connects with the most suitable buyers or suppliers based on your preferences like product type, price, proximity, quality and quantity.",
        icon: (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 1l4 4-4 4m0-4h-9a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4h-1"></path>
            </svg>
          ),          
      },
      {
        title: "Cold-Chain Logistics",
        description:
        "Access temperature-controlled logistics to maintain the freshness and quality of produce during transportation from farm to market.",
        icon: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="35"
            width="35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
          </svg>
        ),
      },
      {
        title: "Quality Assurance & Collection Centers",
        description:
        "Ensure high-quality standards with produce checks at our collection centers and packinghouses before delivery to buyers.",
        icon: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="35"
            width="35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
          </svg>
        ),
      },    
  ];

  return (
    <section className="w-full p-10 md:p-16 md:px-24">
      <div className="md:w-[80%] md:text-left">
        <h1 className="font-bold text-[2rem] md:text-[2.8rem]">
          Products: Features of The Platform
        </h1>
        <p className="text-[#003311] text-[1rem] md:text-[1.3rem] font-semibold mt-4">
          Our products showcase the value Konectar brings to both buyers and
          suppliers, emphasizing financial security, convenience and quality
          assurance.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#003311] text-white rounded-lg font-bold p-5 md:h-[24rem] md:w-[40rem]"
          >
            <div className="text-white">{feature.icon}</div>
            <h1 className="text-[1.2rem] mt-3">{feature.title}</h1>
            <p className="mt-4">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsFeatures;
