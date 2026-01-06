import React from "react";

const Button = ({ text, onClick, type = "button", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="text-white text-[1.2rem] hover:text-gray-300 transition font-poppins"
    >
      {text}
    </button>
  );
};

export default Button;
