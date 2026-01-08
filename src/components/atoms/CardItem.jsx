// src/components/atoms/CardItem.jsx
import React from "react";
import Icon from "./Icon";

const CardItem = ({ title, type }) => {
  return (
    <div className="min-w-[260px] h-[160px] bg-[#202027] rounded-xl p-4 flex flex-col justify-between shadow-lg cursor-pointer hover:scale-105 transition-transform">
      <div className="text-white text-xl font-semibold">{title}</div>

      <div className="flex justify-end">
        <Icon type={type} />
      </div>
    </div>
  );
};

export default CardItem;
