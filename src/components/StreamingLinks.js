export default function StreamingLinks() {
  return (
    <section className="text-center py-6">
      <h3 className="text-xl font-semibold mb-4">Stream It Your Way</h3>
      <div className="flex justify-center gap-4">
        {["Apple", "Spotify", "YouTube", "Deezer"].map((platform) => (
          <button
            key={platform}
            className="border px-4 py-2 rounded hover:bg-gray-800"
          >
            {platform}
          </button>
        ))}
      </div>
    </section>
  );
}
