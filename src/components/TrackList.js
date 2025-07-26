import { IoMdPlay } from "react-icons/io";

export default function TrackList() {
  const tracks = [
    { name: "Nofy", duration: "3:45" },
    { name: "Mandalo", duration: "4:12" },
    { name: "Fitiavana", duration: "2:58" },
    { name: "Masonao", duration: "3:30" },
    { name: "Tsiky", duration: "5:20" },
  ];

  return (
    <div className="space-y-2">
      {tracks.map((track, index) => (
        <div key={index} className="flex items-center text-white">
          <IoMdPlay className="text-green-500 mx-2" />
          <span className="w-20 text-gray-400">Track {index + 1}</span>
          <span className="flex-grow">{track.name}</span>
          <span className="text-gray-400">{track.duration}</span>
        </div>
      ))}
    </div>
  );
}
