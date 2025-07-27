import { useState } from "react";
import { IoMdPlay } from "react-icons/io";

export default function TrackList() {
  const tracks = [
    { name: "Nofy", duration: "3:45" },
    { name: "Mandalo", duration: "4:12" },
    { name: "Fitiavana", duration: "2:58" },
    { name: "Masonao", duration: "3:30" },
    { name: "Tsiky", duration: "5:20" },
  ];

  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlay = (index) => {
    setPlayingIndex(index);
    setTimeout(() => {
      setPlayingIndex(null); // Stop animation apres 1 second
    }, 1000);
  };

  return (
    <div className="space-y-2">
      {tracks.map((track, index) => (
        <div key={index} className="flex items-center text-white">
          <IoMdPlay
            onClick={() => handlePlay(index)}
            className={`text-green mx-2 font-montserrat cursor-pointer transition-transform duration-500 ${
              playingIndex === index ? "animate-spin" : ""
            }`}
          />
          <span className="w-20 text-gray-400 font-montserrat">
            Track {index + 1}
          </span>
          <span className="flex-grow font-montserrat">{track.name}</span>
          <span className="text-gray-400 font-montserrat">
            {track.duration}
          </span>
        </div>
      ))}
    </div>
  );
}
