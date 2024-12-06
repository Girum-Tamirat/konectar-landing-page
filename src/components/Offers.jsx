import React from 'react';
import farmer from "../images/farmer.png"
import fruits from "../images/fruits.png"
import truck from "../images/truck.png"

function Offers() {
  const offersData = [
    {
      imgSrc: farmer,
      imgAlt: 'SDG2',
      title: 'Konectar for Farmers',
      description: 'Skip multiple middlemen and sell directly to businesses like...',
      linkText: 'Read More',
      linkHref: '/FarmersPage',
      buttonText: 'Join The Waitlist',
      buttonHref: '/WaitingListForm',
    },
    {
      imgSrc: fruits,
      imgAlt: 'frame 2',
      title: 'Konectar for Wholesale Buyers',
      description: 'Effortlessly Find, Order, and Receive High-quality Fruits and Vegetables...',
      linkText: 'Read More',
      linkHref: '/BuyersPage',
      buttonText: 'Contact Us',
      buttonHref: '/ContactForm',
    },
    {
      imgSrc: truck,
      imgAlt: 'frame 3',
      title: 'Konectar for Logistics',
      description: 'By becoming a 3rd-party logistics partner, you will gain access to...',
      linkText: 'Read More',
      linkHref: '/TruckersPage',
      buttonText: 'Contact Us',
      buttonHref: '/ContactForm',
    },
  ];

  return (
    <section
      id="offers"
      className="bg-[linear-gradient(to_right_,rgba(6,8,15,0.8),rgba(6,8,12,0.8)),url('../images/hero5.png')] bg-cover bg-center bg-no-repeat font-Manrope justify-center items-center py-14 px-8 md:px-16"
    >
      <h1 className="font-Manrope text-white text-center text-[2rem] md:text-[2.8rem] font-bold mb-6">
        What We Offer!
      </h1>
      <hr />
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-10">
        {offersData.map((offer, index) => (
          <div
            key={index}
            className="bg-[#ffffff] px-4 py-4 rounded-lg basis-[30%] w-full"
          >
            <img
              className="w-[100%]"
              src={offer.imgSrc}
              alt={offer.imgAlt}
              loading="lazy"
            />
            <h1 className="font-bold text-[1.2rem] mt-5">{offer.title}</h1>
            <p className="mt-3">
              {offer.description}
              <b className="cursor-pointer text-[#009933] hover:text-[1.1rem] hover:text-[#2a6d2a]">
                <a href={offer.linkHref}> {offer.linkText} </a>
              </b>
            </p>
            <a href={offer.buttonHref}>
              <button className="bg-[#009933] px-3 py-2 text-white rounded-lg mt-3">
                {offer.buttonText}
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
