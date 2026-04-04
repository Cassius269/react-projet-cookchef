import { useEffect, useState } from "react";
import Recipes from "./components/Recipes/Recipes";
import SearchBar from "./components/SearchBar";
import Loading from "../../components/Loading";

function Homepage() {
  // Déclaration de l'état du composant
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Récupérer les recettes de l'API après le rendu composant Homepage
  useEffect(() => {
    const getRecipesFromAPI = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://www.restapi.fr/api/recipes");

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setRecipes(data);
        } else {
          console.log("Ooops, une erreur");
        }
      } catch (error) {
        console.log(`Erreur: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    getRecipesFromAPI();
  }, []);

  // console.log(recipes);
  return (
    <main className="container">
      <SearchBar recipes={recipes} />
      <section>
        {isLoading ? <Loading /> : <Recipes recipes={recipes} />}
      </section>
    </main>
  );
}

export default Homepage;
