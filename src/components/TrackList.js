import { useState } from "react";
import { IoMdPlay } from "react-icons/io";

export default function TrackList({ tracks }) {
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlay = (index) => {
    setPlayingIndex(index);
    setTimeout(() => setPlayingIndex(null), 1000);
  };

  return (
    <div className="space-y-2">
      {tracks.map((track, index) => (
        <div key={index} className="flex items-center text-white">
          <IoMdPlay
            onClick={() => handlePlay(index)}
            className={`text-green mx-2 cursor-pointer transition-transform duration-500 ${
              playingIndex === index ? "animate-spin" : ""
            }`}
          />
          <span className="w-20 text-gray-400">Track {index + 1}</span>
          <span className="flex-grow">{track.name}</span>
          <span className="text-gray-400">{track.duration}</span>
        </div>
      ))}
    </div>
  );
}
