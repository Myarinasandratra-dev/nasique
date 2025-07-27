import AlbumHero from "../components/AlbumHero";
import StreamingLinks from "../components/StreamingLinks";
import TrackList from "../components/TrackList";
import OtherReleases from "../components/OtherReleases";
import Footer from "../components/Footer";

export default function AlbumPage() {
  return (
    <div className="bg-neutral-900 text-white font-sans">
      <main>
        <AlbumHero />
        <div className="px-6 md:px-20">
          <StreamingLinks />
          <TrackList />
          <OtherReleases />
        </div>
      </main>
      <Footer />
    </div>
  );
}

/*       <main className="px-6 md:px-20"> */
