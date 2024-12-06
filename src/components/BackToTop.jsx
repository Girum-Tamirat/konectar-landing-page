import React from 'react';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-[#009933] text-white p-3 rounded-full shadow-lg hover:bg-[#003311] transition duration-300"
    >
      Back to Top ↑
    </button>
  );
};

export default BackToTopButton;
