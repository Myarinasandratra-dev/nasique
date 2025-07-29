import { Routes, Route, Navigate } from "react-router-dom";
import AlbumPage from "./pages/AlbumPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/album/andro-iray" replace />} />
      <Route path="/album/:id" element={<AlbumPage />} />
    </Routes>
  );
}
/* <Route path="/album/:id" element={<AlbumPage />} */
