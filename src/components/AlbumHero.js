import img1 from "../assets/test.jpg";
import { IoMdPlay } from "react-icons/io";

export default function AlbumHero() {
  return (
    <section className="relative h-auto min-h-[500px] w-full overflow-hidden">
      {/* Image de fond */}
      <img
        src={img1}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Overlay dégradé noir */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-transparent"></div>

      {/* Contenu principal en responsive */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center md:items-center px-6 py-12 gap-8">
        {/* Image de l’album */}
        <img src={img1} alt="Album Cover" className="w-64 rounded shadow-lg" />

        {/* Bloc texte aligné à gauche */}
        <div className="text-white text-left">
          <h2 className="text-4xl font-bold uppercase tracking-wide">
            ANDRO IRAY
          </h2>
          <p className="text-lg text-neutral-300 mt-2 mb-4">by Nasandratra</p>
          <button className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded">
            <IoMdPlay className="text-xl" />
            <span className="leading-none">Listen Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}
