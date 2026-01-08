import React from "react";
import Title from "../components/atoms/Title";
import Paragraph from "../components/atoms/Paragraph";
import SectionSubtitle from "../components/atoms/SectionSubtitle";
import EssenceItem from "../components/molecules/EssenceItem";
import Logo from "../components/atoms/Logo"; // Ruta correcta

const AboutUs = () => {
  return (
    <section
      style={{
        backgroundColor: "#2F303A",
        padding: "3rem",
        minHeight: "100vh",
      }}
    >
      {/* Encabezado con logo + texto */}
      <div
        className="
          flex 
          items-center 
          gap-3 
          text-white 
          font-poppins 
          text-[1.2rem] 
          mb-6
        "
      >
        <Logo />
        <h1>About SoundWave</h1>
      </div>

      <Paragraph>
        At SoundWave, we believe music is more than sound: it’s energy,
        identity, and connection. We were born with the mission of creating a
        space where every sound wave tells a story and where listeners can
        discover new ways to feel music. We are a community that vibrates to the
        rhythm of emerging artists, innovative genres, and listening experiences
        that leave a mark.
      </Paragraph>

      <SectionSubtitle>Our Essence</SectionSubtitle>
      <ul style={{ paddingLeft: "1.2rem" }}>
        <EssenceItem text="passion for musical discovery: we promote new talents and sounds that deserve to be heard." />
        <EssenceItem text="authentic curation: every playlist is crafted with intention, emotion, and care." />
        <EssenceItem text="genuine connection with our audience: we listen, share, and grow alongside our community." />
        <EssenceItem text="constant evolution: we explore trends, collaborations, and new ways to enjoy music." />
      </ul>

      <SectionSubtitle>What You’ll Find on SoundWave</SectionSubtitle>
      <ul style={{ paddingLeft: "1.2rem" }}>
        <EssenceItem text="playlists designed for every mood" />
        <EssenceItem text="emerging artists with fresh proposals" />
        <EssenceItem text="stories and concepts behind each selection" />
        <EssenceItem text="a space where music finds you" />
      </ul>
    </section>
  );
};

export default AboutUs;
