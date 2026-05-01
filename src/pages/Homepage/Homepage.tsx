import { useState } from "react";
import Recipes from "./components/Recipes/Recipes";
import SearchBar from "./components/SearchBar/SearchBar";
import Loading from "../../components/Loading";
import { deleteRecipe as deleteR, updateRecipe as updateR } from "../../apis";
import useFetchRecipes from "../../hooks/useFetchRecipes";
import type { recipeI } from "../../interfaces";

function Homepage() {
  const [page, setPage] = useState(1);

  const { recipes, setRecipes, isLoading } = useFetchRecipes(page);

  // Mettre à jour une recette
  const updateRecipe  = async (updatedRecipe: recipeI): Promise<void> => {
    const savedRecipeAPI = await updateR(updatedRecipe);

    setRecipes(
      recipes.map((r) => (r._id === savedRecipeAPI._id ? savedRecipeAPI : r)),
    );
  };

  // Supprimer une recette
  const deleteRecipe = async (_id: string): Promise<void> => {
    await deleteR(_id);
    setRecipes(recipes.filter((r) => r._id !== _id));
  };

  // Gestionnaire d'évenement de la pagination
  const handleclickMoreRecipes = () => setPage(page + 1);

  return (
    <main className="container">
      <SearchBar recipes={recipes} />
      <section>
        {isLoading && !recipes?.length ? (
          <Loading isLarge={false} />
        ) : (
          <Recipes
            recipes={recipes}
            updateRecipe={updateRecipe}
            deleteRecipe={deleteRecipe}
          />
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
