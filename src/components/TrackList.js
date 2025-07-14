const tracks = [
  "The Small Things",
  "Without Your Love",
  "Therapy",
  "Fighters",
  "Way Up",
  "Waiting",
  "Dreaming",
  "Tattoo",
  "Out for the Night",
  "Overdue",
  "Say It",
  "Here to Stay",
];

export default function TrackList() {
  return (
    <section className="py-10">
      <h3 className="text-2xl font-bold mb-6">Track List</h3>
      <ul className="space-y-2">
        {tracks.map((track, index) => (
          <li
            key={index}
            className="flex justify-between border-b border-gray-700 py-2"
          >
            <span>
              {index + 1}. {track}
            </span>
            <span className="text-sm text-gray-400">3:00</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
