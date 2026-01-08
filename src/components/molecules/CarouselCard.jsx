// src/components/molecules/CarouselCard.jsx
import React from "react";

const CarouselCard = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-4">
      <div className="flex gap-4 px-4">{children}</div>
    </div>
  );
};

export default CarouselCard;
