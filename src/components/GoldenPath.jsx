import React from 'react';
import golden from "../images/golden-path.png"

const GoldenPath = () => {
  return (
    <div className="m-auto md:px-20 w-[90%] md:w-[80%] py-16">
      <img
        src={golden}
        alt="Our Process: The Golden Path"
        loading="lazy"
        className="w-full"
      />
    </div>
  );
};

export default GoldenPath;
