import { Routes, Route } from "react-router-dom";
import AlbumPage from "./pages/AlbumPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AlbumPage />} />
    </Routes>
  );
}
