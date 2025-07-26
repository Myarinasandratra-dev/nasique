import img1 from "../assets/pexels-dilara-irem-144475329-11940270.jpg";
import img2 from "../assets/pexels-mikoto-3769099.jpg";
import img3 from "../assets/pexels-emine-canpolat-54518645-9055153.jpg";
import img4 from "../assets/pexels-marcelochagas-1876279.jpg";
import img5 from "../assets/pexels-neosiam-590663.jpg";
import img6 from "../assets/pexels-patrick-porto-1570340-4778203.jpg";

const albums = [
  { image: img1, title: "Mihaino" },
  { image: img2, title: "Fetra" },
  { image: img3, title: "Natiora" },
  { image: img4, title: "Aza miaino" },
  { image: img5, title: "Rehefa izay" },
  { image: img6, title: "Manitra" },
];

export default function OtherReleases() {
  return (
    <section className="py-10">
      <h3 className="text-2xl font-bold mb-6">Other Releases Like This</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {albums.map((album, i) => (
          <div key={i} className="bg-gray-800 rounded p-2">
            <img
              src={album.image}
              alt={album.title}
              className="h-32 w-full object-cover rounded mb-2"
            />
            <p className="text-sm text-center text-white">{album.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
