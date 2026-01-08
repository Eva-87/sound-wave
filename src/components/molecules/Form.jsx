import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User subscribed:", form);
  };

  return (
    <form
      className="
        flex flex-col gap-6 
        bg-[#202027] 
        p-8 
        rounded-2xl 
        shadow-xl 
        w-full 
        max-w-md 
        text-white 
        font-poppins 
        text-[1.2rem]
      "
      onSubmit={handleSubmit}
    >
      <Input
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <Input
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <Input
        label="Password"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />

      <Button
        text="Join Now"
        type="submit"
        className="
          bg-[#1762A7] 
          px-6 py-3 
          rounded-lg 
          font-semibold 
          hover:bg-[#2180d8] 
          focus:bg-[#2796ff]
          transition
        "
      />
    </form>
  );
}

export default Form;
