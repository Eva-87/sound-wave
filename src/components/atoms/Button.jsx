const Button = ({ text, onClick, type = "button", disabled = false, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`text-white text-[1.2rem] hover:text-gray-300 transition font-poppins ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
