import React from 'react';
import dami from "../images/person1.jpg"
import ese from "../images/person2.jpg"
import linda from "../images/person3.jpg"


const TeamSection = () => {
  const teamMembers = [
    {
      name: "Damilola Atayero",
      role: "Product Manager & Marketer",
      experience: "7 years experience in B2B sales, Client Management and managing Digital Products",
      nickname: "THE CLOSER",
      image: dami,
    },
    {
      name: "Ese Jibromah",
      role: "Founder & CEO",
      experience: "2x Agribusiness Founder and graduate of Agricultural Science with over 6 years experience on C-level Roles",
      nickname: "THE STRATEGIST",
      image: ese,
    },
    {
      name: "LindaGift Awo",
      role: "Software Engineer",
      experience: "5 years experience in Product Design and building Software solutions",
      nickname: "THE HACKER",
      image: linda,
    },
  ];

  return (
    <>
      <section className="text-center px-12 mt-10">
        <h1 className="text-[2rem] md:text-[2.8rem] font-bold text-[#0d2727]">Our Team: The Beacons</h1>
        <div className="md:w-[60%] m-auto">
          <p className="mt-5 text-[#003311] font-semibold">
            We are a passionate and diverse group of professionals, driven by innovation and a shared commitment to delivering exceptional results.
          </p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-center items-center px-16 gap-12 md:gap-28 mt-10 py-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="basis-[20%] flex flex-col items-center justify-center">
            <div className="rounded-full flex justify-center items-center">
              <img className="size-full rounded-[50%]" src={member.image} alt={`Team Member ${index + 1}`} loading="lazy" />
            </div>
            <div className="text-center">
              <p className="font-bold">{member.name}</p>
              <p className="text-[#0b0c0b] text-[0.8rem] mt-1">({member.role})</p>
              <p className="text-[0.8rem] mt-4 font-bold">{member.experience}</p>
              <p className="text-[0.8rem] mt-2 text-[#009933] font-semibold">"{member.nickname}"</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default TeamSection;
