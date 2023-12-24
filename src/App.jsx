import { Route, Routes } from "react-router-dom";

import { Inicio } from "./pages/Inicio.jsx";
import { Perfil } from "./pages/Perfil.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  )
}