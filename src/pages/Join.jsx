import Form from '../components/molecules/Form';


const Join = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#2F303A] overflow-hidden flex items-center justify-center p-10">

      {/* CÍRCULO GRANDE */}
      <div
        className="
          absolute 
          w-[60vw] md:w-[40vw]
          h-[60vw] md:h-[40vw]
          rounded-full 
          bg-[#bc3a801a]
          top-[10vw] md:top-[2vw]
          left-[-20vw] md:left-[-10vw]
        "
      ></div>

      {/* CÍRCULO PEQUEÑO */}
      <div
        className="
          absolute 
          w-[35vw] md:w-[22vw]
          h-[35vw] md:h-[22vw]
          rounded-full 
          bg-[#3457b21a]
          bottom-[10vw] md:bottom-[35vw]
          right-[10vw] md:right-[48vw]
        "
      ></div>

      {/* CONTENIDO + FORMULARIO */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">

        {/* TEXTO */}
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center md:text-left">
          Join the <span className="text-[#ff2ebd]">Fun.</span>
        </h1>

        {/* FORMULARIO */}
        <div className="w-full max-w-sm">
          <Form />
        </div>

      </div>

    </section>
  );
};

export default Join;
