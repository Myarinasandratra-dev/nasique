/*
/*✅ Voici comment faire ça en React (statique) :
🎯 Objectif :
Une liste d’albums (ex : page d’accueil ou HomePage)

Quand on clique sur un album → afficher l’AlbumPage correspondante

Les données des albums sont stockées en local (fichier albums.js par exemple)

🧩 Étape 1 : Créer un fichier de données albums.js
src/data/albums.js

js
Copier
Modifier*/
/*
const albums = [
  {
    id: "andro-iray",
    title: "ANDRO IRAY",
    artist: "Nasandratra",
    cover: "/assets/pdp.jpg",
    tracks: [
      { name: "Nofy", duration: "3:45" },
      { name: "Mandalo", duration: "4:12" },
      { name: "Fitiavana", duration: "2:58" },
    ],
  },
  {
    id: "fahazavana",
    title: "FAHAZAVANA",
    artist: "Nasandratra",
    cover: "/assets/other.jpg",
    tracks: [
      { name: "Hazavana", duration: "3:33" },
      { name: "Tsiaro", duration: "4:01" },
    ],
  },
];

export default albums;
/*🧩 Étape 2 : Créer une page qui liste tous les albums (HomePage)
src/pages/HomePage.js

jsx
Copier
Modifier
import albums from "../data/albums";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Albums disponibles</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {albums.map((album) => (
          <Link
            key={album.id}
            to={`/album/${album.id}`}
            className="bg-neutral-800 rounded shadow p-4 hover:bg-neutral-700 transition"
          >
            <img src={album.cover} alt={album.title} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-xl font-bold">{album.title}</h2>
            <p className="text-gray-400">par {album.artist}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
/*🧩 Étape 3 : Modifier AlbumPage.js pour qu’il affiche l’album selon son id
src/pages/AlbumPage.js 

jsx
Copier
Modifier
import { useParams } from "react-router-dom";
import albums from "../data/albums";
import { IoMdPlay } from "react-icons/io";

export default function AlbumPage() {
  const { albumId } = useParams();
  const album = albums.find((a) => a.id === albumId);

  if (!album) return <p className="text-white p-10">Album introuvable</p>;

  return (
    <section className="text-white p-10">
      <img src={album.cover} alt={album.title} className="w-64 mb-4 rounded shadow" />
      <h2 className="text-3xl font-bold">{album.title}</h2>
      <p className="text-gray-400 mb-6">par {album.artist}</p>
      <ul className="space-y-2">
        {album.tracks.map((track, i) => (
          <li key={i} className="flex items-center">
            <IoMdPlay className="text-green mr-2" />
            <span className="w-20 text-gray-400">Track {i + 1}</span>
            <span className="flex-grow">{track.name}</span>
            <span className="text-gray-500">{track.duration}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
/*🧩 Étape 4 : Mettre à jour App.jsx avec le routing
src/App.jsx 

jsx
Copier
Modifier
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlbumPage from "./pages/AlbumPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:albumId" element={<AlbumPage />} />
      </Routes>
    </Router>
  );
}

export default App; */
