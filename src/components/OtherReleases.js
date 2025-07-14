export default function OtherReleases() {
  return (
    <section className="py-10">
      <h3 className="text-2xl font-bold mb-6">Other Releases Like This</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-800 rounded p-2">
            <div className="bg-gray-600 h-32 mb-2 rounded"></div>
            <p className="text-sm text-center">Album {i + 1}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
