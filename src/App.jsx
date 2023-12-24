import { Route, Routes } from "react-router-dom";

// Pages
import { Inicio } from "./pages/Inicio.jsx";
import { Perfil } from "./pages/Perfil.jsx";
import { NotFound } from "./pages/NotFound.jsx";

// components
import Header from "./components/Header.jsx";


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}