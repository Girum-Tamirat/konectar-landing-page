import React, { useState } from 'react';

function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const faqs = [
    {
      question: "What is Konectar all about?",
      answer: (
        <p>
          Konectar is a business-to-business (B2B) platform that connects farmers directly to business buyers in the fresh produce market, ensuring seamless, fast, and timely transactions.
        </p>
      ),
    },
    {
      question: "How does Konectar work?",
      answer: (
        <p>
          Konectar provides a seamless platform where farmers list their produce, and wholesale buyers can browse, negotiate, and purchase directly. The platform facilitates secure transactions, logistics, and payment processing, ensuring a hassle-free experience for both parties.
        </p>
      ),
    },
    {
      question: "Who can use Konectar?",
      answer: (
        <p>
          Konectar is designed for:
          <p>- Smallholder farmers looking to expand market access and sell their produce directly to wholesale buyers.</p>
          <p>- Wholesale buyers, including retailers, quick service restaurants, hotels, catering institutions, food processing companies, and exporters, who are looking for a reliable and direct source of high-quality fruits and vegetables.</p>
        </p>
      ),
    },
    {
      question: "What are the benefits of using Konectar?",
      answer: (
        <p>
          For Farmers:
          
            <p>Access to a larger market, fair prices for their produce, and the elimination of middlemen.</p>
          
          For Buyers:<br/>
         
            <p>Direct access to fresh, high-quality produce, transparent pricing, and a simplified procurement process.</p>
          
        </p>
      ),
    },
    {
      question: "How does Konectar ensure the quality of produce?",
      answer: (
        <p>
          We have strict guidelines and verification processes in place. Farmers undergo verification before listing their produce, and our quality assurance team checks the produce at multiple stages, ensuring that only fresh and high-quality fruits and vegetables are transacted.
        </p>
      ),
    },
  ];

  return (
    <section id="faq" className="w-[90%] md:w-[50%] bg-neutral-100 rounded-md text-[#003311] mt-10 m-auto py-4 px-6">
      <h1 className="font-bold text-[2rem] md:text-[2.8rem] text-center text-[#0d2727]">We know you have questions.</h1>
      <p className="mt-3 text-center mb-12">So we have answered some of them.</p>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="text-[#003311] bg-[#D2FFE1] rounded-md py-2 px-3 mb-7 font-semibold">
            <div className="flex justify-between items-center" onClick={() => toggleFAQ(index)}>
              <p>{faq.question}</p>
              <p className="cursor-pointer text-[2.3rem] font-bold">{openIndexes.includes(index) ? '-' : '+'}</p>
            </div>
            {openIndexes.includes(index) && <div className="mt-4">{faq.answer}</div>}
          </div>
        ))}
        <div className="flex justify-end font-bold">
          <button className="text-white rounded-md bg-[#003311] p-3">View More FAQs</button>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
