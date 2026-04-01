import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Recipes from "./pages/Homepage/components/Recipes/Recipes";
import SearchBar from "./pages/Homepage/components/SearchBar";
import Homepage from "./pages/Homepage/Homepage";

export default function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}
