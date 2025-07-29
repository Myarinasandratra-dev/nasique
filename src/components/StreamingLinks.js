import { FaSpotify, FaYoutube } from "react-icons/fa";
import { RiNeteaseCloudMusicLine } from "react-icons/ri";

export default function StreamingLinks({ links }) {
  return (
    <section className="text-start py-6">
      <h3 className="text-xl font-monumentregular mb-4">Stream It Your Way</h3>
      <div className="flex justify-start gap-4">
        {links.spotify && (
          <a
            href={links.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-gray-800"
          >
            <FaSpotify /> Spotify
          </a>
        )}
        {links.youtube && (
          <a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-gray-800"
          >
            <FaYoutube /> YouTube
          </a>
        )}

        {links.youtube && (
          <a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-gray-800"
          >
            <RiNeteaseCloudMusicLine /> Moozik
          </a>
        )}
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
