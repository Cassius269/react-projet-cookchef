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
  const [page, setPage] = useState(1);

  // Récupérer les recettes de l'API après le rendu composant Homepage
  useEffect(() => {
    let cancel = false;
    const getRecipesFromAPI = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${BASE_URL_API}?skip=${(page - 1) * 10}&limit=10`,
        );

        // si la réponse est ok et que la requête n'est pas annulée
        if (response.ok && !cancel) {
          const data = await response.json();
          console.log(data);
          // Création d'une fonction d'update pour éviter les récette en tant que dépendance (ce qui provoquerait une boucle infinie)
          setRecipes((prev) => {
            return Array.isArray(data) ? [...prev, ...data] : [...prev, data];
          }); // si c'est la donnée est un tableau on met dans l'état des recettes directement sinonen créer un nouveau tableau
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
  }, [BASE_URL_API, page]);

  // console.log(recipes);

  const updateRecipe = (updatedRecipe) => {
    setRecipes(
      recipes.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r)),
    );
  };

  // Gestionnaire d'évenement de la pagination
  const handleclickMoreRecipes = () => setPage(page + 1);

  return (
    <main className="container">
      <SearchBar recipes={recipes} />
      <section>
        {isLoading && !recipes.length ? (
          <Loading isLarge={false} />
        ) : (
          <Recipes recipes={recipes} updateRecipe={updateRecipe} />
        )}
        <button
          onClick={handleclickMoreRecipes}
          type="button"
          className="btn btn-warning d-block m-auto mt-5"
        >
          Charger plus de recettes
        </button>
      </section>
    </main>
  );
}

export default Homepage;
