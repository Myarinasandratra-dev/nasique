import { FaSpotify, FaApple, FaYoutube, FaDeezer } from "react-icons/fa";
const platforms = [
  { name: "Apple", icon: <FaApple /> },
  { name: "Spotify", icon: <FaSpotify /> },
  { name: "YouTube", icon: <FaYoutube /> },
  { name: "Deezer", icon: <FaDeezer /> },
];

export default function StreamingLinks() {
  return (
    <section className="text-start py-6">
      <h3 className="text-xl font-semibold mb-4">Stream It Your Way</h3>
      <div className="flex justify-start gap-4">
        {platforms.map(({ name, icon }) => (
          <button
            key={name}
            className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-gray-800"
          >
            {icon}
            {name}
          </button>
        ))}
      </div>
    </section>
  );
}
/* ou  const platforms = [
  { name: "Apple", icon: "/icons/apple.svg" },
  { name: "Spotify", icon: "/icons/spotify.svg" },
  { name: "YouTube", icon: "/icons/youtube.svg" },
  { name: "Deezer", icon: "/icons/deezer.svg" },
];
Puis dans le map :

jsx
Copier
Modifier
<img src={icon} alt={name} className="w-5 h-5" /> */
