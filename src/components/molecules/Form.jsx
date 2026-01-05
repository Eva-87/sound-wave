import { useState } from "react";
import Input from "./Input";
import Button from "./Button";


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
    <form className="subscribe-form" onSubmit={handleSubmit}>
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

      <Button>Join Now</Button>
    </form>
  );
}

export default Form;
