function Input({ label, name, type = "text", value, onChange }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          htmlFor={name}
          className="text-white font-medium tracking-wide"
        >
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="
          w-full 
          px-4 
          py-3 
          rounded-lg 
          bg-transparent
          border 
          border-[#2E3852]
          text-white 
          placeholder-gray-400 
          outline-none 
          focus:border-[#596da0]
          transition
        "
      />
    </div>
  );
}

export default Input;
