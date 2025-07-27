import { useState } from "react";
import img1 from "../assets/pdp.jpg";
import { IoMdPlay } from "react-icons/io";

export default function AlbumHero() {
  const [hovered, setHovered] = useState(false);

  const imageStyle = {
    transition: "transform 0.5s ease, filter 0.5s ease",
    transform: hovered ? "scale(1.05) rotate(1deg)" : "scale(1)",
    filter: hovered ? "brightness(1.1)" : "brightness(1)",
    boxShadow: hovered
      ? "0 10px 30px rgba(0,0,0,0.5)"
      : "0 4px 10px rgba(0,0,0,0.3)",
  };

  return (
    <section className="relative h-auto min-h-[500px] w-full">
      {/* Header placé en bas du DOM = derrière l’image */}
      <header className="absolute top-0 left-0 w-full pt-6 px-6 md:px-20 flex justify-between items-center text-white z-20">
        <h1 className="text-2xl font-bold font-monumentregular">Nasique</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      {/* Image de fond */}
      <img
        src={img1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/100 via-black/70 to-transparent z-20"></div>

      {/* Contenu principal */}
      <div className="relative z-30 h-full flex flex-col md:flex-row items-center px-1 pt-40 gap-8">
        <div className="px-1 md:px-20 flex flex-row gap-10 items-end">
          <img
            src={img1}
            alt="Album Cover"
            style={imageStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="w-64 rounded"
          />
          <div className="text-white text-left">
            <h2 className="text-4xl font-monumentregular uppercase tracking-wide">
              ANDRO IRAY
            </h2>
            <p className="text-lg font-montserrat text-neutral-300 mt-2 mb-4">
              by Nasandratra
            </p>
            <button className="flex items-center gap-2 px-6 py-2 bg-green hover:bg-green-500 text-white rounded">
              <IoMdPlay className="text-xl" />
              <span className="leading-none">Listen Now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
