import { useContext, useState } from "react";
import Recipes from "./components/Recipes/Recipes";
import SearchBar from "./components/SearchBar/SearchBar";
import Loading from "../../components/Loading";
import { UrlAPIContext } from "../../context/UrlAPIContext";
import useFetchRecipes from "../../hooks/useFetchData";

function Homepage() {
  // Récupérer le context de l'URL de l'API telle que fournie en valeur dans "/src/main.jsx"
  const BASE_URL_API = useContext(UrlAPIContext);
  const [page, setPage] = useState(1);

  const {
    data: recipes,
    setData: setRecipes,
    isLoading,
  } = useFetchRecipes(BASE_URL_API, page);

  // console.log(recipes);
  // Mettre à jour une recette
  const updateRecipe = async (updatedRecipe) => {
    const { _id, ...payload } = updatedRecipe;
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "PATCH",
        body: JSON.stringify({ ...payload }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Réponse du serveur", data);
        setRecipes(
          recipes.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r)),
        );
      } else {
        console.log("Ooops, une erreur");
      }
    } catch (error) {
      console.log(`Erreur: ${error.message}`);
    }
  };

  // Supprimer une recette
  const deleteRecipe = async (_id) => {
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return setRecipes(recipes.filter((r) => r._id !== _id));
      } else {
        console.log("Ooops une erreur");
      }
    } catch (error) {
      console.log(`Erreur : ${error.message}`);
    }
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
