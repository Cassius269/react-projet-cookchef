import { useContext, useEffect, useState } from "react";
import Recipes from "./components/Recipes/Recipes";
import SearchBar from "./components/SearchBar";
import Loading from "../../components/Loading";
import { UrlAPIContext } from "../../context/UrlAPIContext";

function Homepage() {
  // Récupérer le context de l'URL de l'API telle que fournie en valeur dans "/src/main.jsx"
  const BASE_URL_API = useContext(UrlAPIContext);

  // Déclaration de l'état du composant
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Récupérer les recettes de l'API après le rendu composant Homepage
  useEffect(() => {
    let cancel = false;
    const getRecipesFromAPI = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(BASE_URL_API);

        // si la réponse est ok et que la requête n'est pas annulée
        if (response.ok && !cancel) {
          const data = await response.json();
          console.log(data);
          setRecipes(Array.isArray(data) ? data : [data]); // si c'est la donnée est un tableau on met dans l'état des recettes directement sinonen créer un nouveau tableau
        } else {
          console.log("Ooops, une erreur");
        }
      } catch (error) {
        console.log(`Erreur: ${error.message}`);
      } finally {
        // si la requête est terminée et qu'elle n'a pas été annulée, mettre le loading à false
        if (!cancel) {
          setIsLoading(false);
        }
      }
    };

    // Appel de la fonction de récupération des recettes depuis l'API
    getRecipesFromAPI();

    // Fonction de clean-up
    return () => (cancel = true);
  }, [BASE_URL_API]);

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
