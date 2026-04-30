import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import { SeedRecipes } from "./assets/data/SeedRecipes";
import Admin from "./pages/Admin/Admin";
import { Outlet } from "react-router";
import { Suspense } from "react";

// SeedRecipes(); // peupler l'API par les recettes locales par défaut

export default function App() {
  return (
    <>
      <Header />
      {/** Contenu dynamique en fonction des routes enfants */}

      <Suspense
        fallback={
          <p className="text-center text-warning mt-5 vh-100">
            Chargement en cours
          </p>
        }
      >
        <div style={{ minHeight: "80vh", flex: 1 }}>
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </>
  );
}
