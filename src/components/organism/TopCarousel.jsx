// src/components/organisms/TopCarousel.jsx
import React from "react";
import CarouselCard from "../molecules/CarouselCard";
import CardItem from "../atoms/CardItem";

const TopCarousel = () => {
  const items = [
    { title: "Top Songs Global", type: "microphone" },
    { title: "Top Artists Global", type: "topartist" },
    { title: "Top Albums", type: "topalbums" },
    { title: "Viral 50", type: "viral50" },
    { title: "Local Pulse", type: "pulse" },
  ];

  return (
    <div className="w-full mt-6">
      <h2 className="text-white text-2xl font-bold px-4 mb-2">
        Charts are made by fans.
      </h2>

      <CarouselCard>
        {items.map((item, index) => (
          <CardItem key={index} title={item.title} type={item.type} />
        ))}
      </CarouselCard>
    </div>
  );
};

export default TopCarousel;
