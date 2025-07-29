import { useParams } from "react-router-dom";
import albums from "../data/albumsData";
import AlbumHero from "../components/AlbumHero";
import StreamingLinks from "../components/StreamingLinks";
import TrackList from "../components/TrackList";
import OtherReleases from "../components/OtherReleases";
import Footer from "../components/Footer";

export default function AlbumPage() {
  const { id } = useParams();
  const album = albums.find((a) => a.id === id);

  if (!album) return <div className="text-white p-10">Album non trouvé</div>;

  return (
    <div className="bg-neutral-900 text-white font-sans">
      <main>
        <AlbumHero album={album} />
        <div className="px-6 md:px-20">
          <StreamingLinks links={album.streamingLinks} />
          <TrackList tracks={album.tracks} />
          <OtherReleases currentAlbumId={album.id} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
