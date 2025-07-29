import androiray from "../assets/1.jpg";
import mihaino from "../assets/2.jpg";
import manitra from "../assets/3.jpg";
import natiora from "../assets/4.jpg";
import fetra from "../assets/5.jpg";
import rehefa from "../assets/6.jpg";
import masonao from "../assets/7.jpg";

const albums = [
  {
    id: "andro-iray",
    title: "Andro Iray",
    cover: androiray,
    description: "Premier album du groupe...",
    tracks: [
      { name: "Hazavana", duration: "3:33" },
      { name: "Tsiaro", duration: "4:01" },
      { name: "Fitiavana", duration: "4:21" },
      { name: "Masona", duration: "3:41" },
      { name: "Tsiky", duration: "4:11" },
    ],
    streamingLinks: {
      spotify: "https://open.spotify.com/album/xxx",
      youtube: "https://youtube.com/playlist/xxx",
    },
  },
  {
    id: "mihaino",
    title: "Mihaino",
    cover: mihaino,
    description: "Deuxième album du groupe...",
    tracks: [
      { name: "Mihaino", duration: "3:45" },
      { name: "Fetra", duration: "4:12" },
      { name: "Natiora", duration: "2:58" },
      { name: "Aza miaino", duration: "3:30" },
      { name: "Rehefa izay", duration: "5:20" },
    ],
    streamingLinks: {
      spotify: "https://open.spotify.com/album/yyy",
      youtube: "https://youtube.com/playlist/yyy",
    },
  },
  {
    id: "manitra",
    title: "Manitra",
    cover: manitra,
    description: "Troisième album du groupe...",
    tracks: [
      { name: "Manitra", duration: "3:50" },
      { name: "Fitiavana", duration: "4:05" },
      { name: "Masonao", duration: "3:20" },
      { name: "Tsiky", duration: "4:15" },
      { name: "Nofy", duration: "5:00" },
    ],
    streamingLinks: {
      spotify: "https://open.spotify.com/album/zzz",
      youtube: "https://youtube.com/playlist/zzz",
    },
  },
  {
    id: "fetra",
    title: "Fetra",
    cover: fetra,
    description: "Quatrième album du groupe...",
    tracks: [
      { name: "Fetra", duration: "3:55" },
      { name: "Natiora", duration: "4:10" },
      { name: "Aza miaino", duration: "3:35" },
      { name: "Rehefa izay", duration: "4:25" },
      { name: "Mihaino", duration: "5:15" },
    ],
    streamingLinks: {
      spotify: "https://open.spotify.com/album/aaa",
      youtube: "https://youtube.com/playlist/aaa",
    },
  },
  {
    id: "natiora",
    title: "Natiora",
    cover: natiora,
    description: "Cinquième album du groupe...",
    tracks: [
      { name: "Natiora", duration: "3:40" },
      { name: "Aza miaino", duration: "4:00" },
      { name: "Rehefa izay", duration: "3:50" },
      { name: "Mihaino", duration: "4:30" },
      { name: "Fetra", duration: "5:10" },
    ],
    streamingLinks: {
      spotify: "https://open.spotify.com/album/bbb",
      youtube: "https://youtube.com/playlist/bbb",
    },
  },
  {
    id: "rehefa-izay",
    title: "Rehefa izay",
    cover: rehefa,
    description: "Sixième album du groupe...",
    tracks: [
      { name: "Rehefa izay", duration: "3:30" },
      { name: "Mihaino", duration: "4:20" },
      { name: "Fetra", duration: "3:45" },
      { name: "Natiora", duration: "4:05" },
      { name: "Aza miaino", duration: "5:25" },
    ],
    streamingLinks: {
      spotify: "https://open.spotify.com/album/ccc",
      youtube: "https://youtube.com/playlist/ccc",
    },
  },
  {
    id: "masonao",
    title: "Masonao",
    cover: masonao,
    description: "Septième album du groupe...",
    tracks: [
      { name: "Masonao", duration: "3:50" },
      { name: "Tsiky", duration: "4:15" },
      { name: "Nofy", duration: "3:40" },
      { name: "Fitiavana", duration: "4:05" },
      { name: "Andro iray", duration: "5:30" },
    ],
    streamingLinks: {
      spotify: "https://open.spotify.com/album/ddd",
      youtube: "https://youtube.com/playlist/ddd",
    },
  },
];

export default albums;
