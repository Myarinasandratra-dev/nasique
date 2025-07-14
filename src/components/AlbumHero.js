export default function AlbumHero() {
  return (
    <section className="text-center py-10">
      <img
        src="https://i1.sndcdn.com/artworks-7B6Lt6KMoSRf-0-t500x500.jpg"
        alt="Album Cover"
        className="w-64 mx-auto mb-4"
      />
      <h2 className="text-4xl font-bold">Level Days</h2>
      <p className="text-lg">by CONRO</p>
      <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded">
        ▶ Listen Now
      </button>
    </section>
  );
}
