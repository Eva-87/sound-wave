import { Link } from "react-router-dom";

const Button = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  link
}) => {
  const baseStyles = `
    text-white 
    text-[1.2rem] 
    font-poppins 
    transition 
    flex items-center justify-center
  `;

  // Render as <Link>
  if (link) {
    return (
      <Link
        to={link}
        className={`${baseStyles} ${className}`}
      >
        {text}
      </Link>
    );
  }

  // Render as <button>
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {text}
    </button>
  );
};

export default Button;
