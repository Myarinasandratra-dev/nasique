import { Link } from "react-router-dom";
import albums from "../data/albumsData";

export default function OtherReleases({ currentAlbumId }) {
  return (
    <section className="py-10">
      <h3 className="text-2xl font-monumentregular mb-6">
        Other Releases Like This
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {albums
          .filter((album) => album.id !== currentAlbumId)
          .map((album) => (
            <Link to={`/album/${album.id}`} key={album.id}>
              <div className="bg-gray-800 rounded p-2 hover:bg-gray-700 transition">
                <img
                  src={album.cover}
                  alt={album.title}
                  className="h-32 w-full object-cover rounded mb-2"
                />
                <p className="text-sm text-center text-white">{album.title}</p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
