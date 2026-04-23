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
  const { data, setData, isLoading } = useFetchRecipes(BASE_URL_API, page);

  // console.log(recipes);
  // Mettre à jour une recette
  const updateRecipe = (updatedRecipe) => {
    setData(data.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r)));
  };

  // Supprimer une recette
  const deleteRecipe = (_id) => {
    return setData(data.filter((r) => r._id !== _id));
  };

  // Gestionnaire d'évenement de la pagination
  const handleclickMoreRecipes = () => setPage(page + 1);

  return (
    <main className="container">
      <SearchBar recipes={data} />
      <section>
        {isLoading && !data.length ? (
          <Loading isLarge={false} />
        ) : (
          <Recipes
            recipes={data}
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
