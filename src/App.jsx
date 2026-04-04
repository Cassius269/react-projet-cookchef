import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import { SeedRecipes } from "./assets/data/SeedRecipes";
import { useEffect } from "react";

export default function App() {
  // Envouyer les recettes après le rendu de l'APP
  useEffect(() => {
    SeedRecipes();
  }, []);

  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}
