import Title from '../components/atoms/Title'
import Button from '../components/atoms/Button'
import girlImage from '../assets/landing-page-girl.png'

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#2F303A] text-white font-poppins overflow-hidden">

      {/* Círculos decorativos */}
      <div className="absolute w-[22rem] h-[22rem] bg-[#bc3a801a] rounded-full top-[-3rem] left-[-2rem]"></div>
      <div className="absolute w-[16rem] h-[16rem] bg-[#3457b21a] rounded-full top-[22%] left-[55%]"></div>
      <div className="absolute w-[30rem] h-[30rem] bg-[#3457b21a] rounded-full bottom-[-6rem] right-[-5rem]"></div>

      {/* CONTENIDO RESPONSIVE */}
      <div className="relative z-10 flex flex-col md:flex-row-reverse items-center justify-center min-h-screen px-6 md:px-10 gap-10 md:gap-20">

        {/* Texto + botón (ahora a la derecha en desktop) */}
        <div className="flex flex-col gap-4 max-w-md text-center md:text-left">
          <Title>Feel the music</Title>

          <p className="text-lg opacity-80">
            Stream over 20 thousand songs with one click
          </p>

          <div className="flex justify-center md:justify-start">
            <Button
              text="JoinNow"
              className="px-6 py-3 rounded-md bg-[#1762A7] hover:bg-[#2180d8] focus:bg-[#2796ff] transition-colors"
            />
          </div>
        </div>

        {/* Imagen (ahora a la izquierda en desktop) */}
        <img
          src={girlImage}
          alt="Girl listening to music"
          className="w-[260px] sm:w-[300px] md:w-[380px] max-w-full object-contain"
        />
      </div>
    </div>
  )
}

export default Home
