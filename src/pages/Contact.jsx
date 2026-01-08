import { useState } from "react";
import Logo from "../components/atoms/Logo";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";


export default function Contact() {
  const [problem, setProblem] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!problem.trim()) return;
    setSubmittedMessage(problem.trim());
    setProblem("");
  };

  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div
        className="
          bg-[#202027] 
          p-8 
          rounded-2xl 
          shadow-xl 
          w-full 
          max-w-xl 
          text-white 
          font-poppins 
          text-[1.2rem]
          flex 
          flex-col 
          gap-6
        "
      >
        {/* Header con logo */}
        <div className="flex items-center gap-3 mb-2">
          <Logo />
          <h2 className="text-2xl font-semibold">Contact SoundWave Support</h2>
        </div>

        {/* Chat */}
        <div className="border border-[#2E3852] rounded-xl p-4 bg-transparent flex flex-col gap-3 min-h-[150px]">
          {/* Mensaje del “bot” */}
          <div
            className="
              self-start 
              bg-[#2E3852] 
              text-white 
              px-4 py-2 
              rounded-xl 
              max-w-[80%]
            "
          >
            Hello! You're contacting SoundWave support. To begin, please describe
            the problem.
          </div>

          {/* Mensaje del usuario */}
          {submittedMessage && (
            <div
              className="
                self-end 
                bg-[#596da0] 
                text-white 
                px-4 py-2 
                rounded-xl 
                max-w-[80%]
              "
            >
              {submittedMessage}
            </div>
          )}
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input
            label="Describe your problem"
            name="problem"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          />

          <Button
            text="Send"
            type="submit"
            className="
              bg-[#1762A7] 
              px-6 py-3 
              rounded-lg 
              font-semibold 
              hover:bg-[#2180d8] 
              focus:bg-[#2796ff]
            "
          />
        </form>
      </div>
    </div>
  );
}
