import Recipes from "./components/Recipes/Recipes";
import SearchBar from "./components/SearchBar";

function Homepage() {
  return (
    <main className="container">
      <SearchBar />
      <Recipes />
    </main>
  );
}

export default Homepage;
