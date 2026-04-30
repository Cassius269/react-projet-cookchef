import { Outlet } from "react-router";
import HeaderAdmin from "../../components/AdminRecipeNav";
import Recipe from "../../components/Recipe";
import { deleteRecipe as deleteR } from "../../../../../../api";
import useFetchRecipes from "../../../../../../hooks/useFetchRecipes";
import { UrlAPIContext } from "../../../../../../context/UrlAPIContext";

function AdminRecipesList() {
  const { recipes, setRecipes } = useFetchRecipes(UrlAPIContext);

  console.log(recipes);

  const deleteRecipe = async (_id) => {
    await deleteR(_id);
    setRecipes(recipes.filter((r) => r._id !== _id));
    console.log("Supprimé");
  };

  return (
    <>
      <HeaderAdmin />
      {recipes.length > 0 && (
        <ul className="ps-3">
          {recipes.map((r) => (
            <li key={r._id}>
              <Recipe recipe={r} deleteRecipe={deleteRecipe} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default AdminRecipesList;
