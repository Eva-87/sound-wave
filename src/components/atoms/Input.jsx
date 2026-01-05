
function Input({ label, name, type = "text", value, onChange }) {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
