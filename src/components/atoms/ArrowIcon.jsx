export default function ArrowIcon({ direction = "same", className = "w-4 h-4" }) {
  const rotation =
    direction === "up" ? "rotate-0" :
    direction === "down" ? "rotate-180" :
    "-rotate-90";

  const color =

    "text-gray-400";

  return (
    <svg
      className={`${className} ${rotation} ${color}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 4l-7 8h5v8h4v-8h5z" />
    </svg>
  );
}
