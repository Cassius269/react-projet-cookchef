import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import { SeedRecipes } from "./assets/data/SeedRecipes";
import { useState } from "react";
import Admin from "./pages/Admin/Admin";

// SeedRecipes(); // peupler l'API par les recettes locales par défaut

export default function App() {
  // Système de routing simple avec la page courante
  const [page, setPage] = useState("homepage");

  return (
    <>
      <Header setPage={setPage} />
      {page === "homepage" && <Homepage />}
      {page === "admin" && <Admin />}
      <Footer />
    </>
  );
}
