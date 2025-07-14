import Header from "../components/Header";
import AlbumHero from "../components/AlbumHero";
import StreamingLinks from "../components/StreamingLinks";
import TrackList from "../components/TrackList";
import OtherReleases from "../components/OtherReleases";
import Footer from "../components/Footer";

export default function AlbumPage() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <main className="px-6 md:px-20">
        <AlbumHero />
        <StreamingLinks />
        <TrackList />
        <OtherReleases />
      </main>
      <Footer />
    </div>
  );
}
