import React, { useState } from 'react';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What is Konectar all about?", answer: "" },
    { question: "How does Konectar work?", answer: "" },
    { question: "Who can use Konectar?", answer: "" },
    { question: "What are the benefits of using Konectar?", answer: "" },
    { question: "How does Konectar ensure the quality of produce?", answer: "" },
  ];

  return (
    <section id="faq" className="w-[90%] md:w-[50%] bg-neutral20 rounded-md text-[#003311] mt-10 m-auto py-4 px-6">
      <h1 className="font-bold text-[2rem] md:text-[2.8rem] text-center text-[#0d2727]">We know you have questions.</h1>
      <p className="mt-3 text-center mb-12">So we have answered some of them.</p>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="text-[#003311] bg-[#D2FFE1] rounded-md py-2 px-3 mb-7 font-semibold">
            <div className="flex justify-between items-center" onClick={() => toggleFAQ(index)}>
              <p>{faq.question}</p>
              <p className="cursor-pointer text-[2.3rem] font-bold">{activeIndex === index ? '-' : '+'}</p>
            </div>
            {activeIndex === index && <div className="mt-4">{faq.answer}</div>}
          </div>
        ))}
        <div className="flex justify-end font-bold">
          <button className="text-white rounded-md bg-[#003311] p-3">View More FAQs</button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
