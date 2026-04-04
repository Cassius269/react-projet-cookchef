import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import { SeedRecipes } from "./assets/data/SeedRecipes";

// SeedRecipes(); // peupler l'API par les recettes locales par défaut

export default function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}
