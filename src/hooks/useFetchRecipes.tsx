import { useEffect, useState } from "react";
import { getRecipes } from "../apis/recipes";
import type { recipeI } from "../interfaces";

function useFetchRecipes(page?: number): {recipes:recipeI[],setRecipes:React.Dispatch<React.SetStateAction<recipeI[]>>,isLoading: boolean } {
  // Déclaration de l'état du composant
  const [recipes, setRecipes] = useState<recipeI[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Récupérer les recettes de l'API après le rendu composant Homepage
  useEffect(() => {
    let cancel = false;
    const getrecipesFromAPI = async () => {
      try {
        setIsLoading(true);
        let queryParams = new URLSearchParams();
        if (page) {
          queryParams.append("limit", '10');
          queryParams.append("skip", `${(page - 1) * 10}`);
          queryParams.append("sort", "createdAt:desc");
        }
        const fetchedRecipes = await getRecipes(queryParams); // récupération des recettes depuis l'API
        if (!cancel) {
          setRecipes((x) => [...x, ...fetchedRecipes]); // modification de l'état local
        }
      } catch (error : unknown) {
        if(error instanceof Error){
          console.log(`Erreur: ${error.message}`);
        }
      } finally {
        // si la requête est terminée et qu'elle n'a pas été annulée, mettre le loading à false
        if (!cancel) {
          setIsLoading(false);
        }
      }
    };

    // Appel de la fonction de récupération des recettes depuis l'API + de mise à jour de l'état local des recettes
    getrecipesFromAPI();

    // Fonction de clean-up
    return () => {
      cancel = true
    };
  }, [page]);

  // console.log(recipes);

  // Les valeurs à retourner par le hook personnalisé
  return { recipes, setRecipes, isLoading };
}

export default useFetchRecipes;
