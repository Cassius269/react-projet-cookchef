import type { recipeListProps } from "../../../../interfaces";
import Recipe from "./Recipe";

export default function Recipes({ recipes, updateRecipe, deleteRecipe }: recipeListProps) {
  return (
    <>
      <h1 className="text-primary">
        Découvrez nos nouvelles recettes <small>{recipes.length}</small>
      </h1>
      <div className="row d-flex justify-content-center gap-4 gap-md-4 gap-lg-5">
        {recipes.map((r) => {
          return (
            <Recipe
              key={r._id}
              recipe={r}
              updateRecipe={updateRecipe}
              deleteRecipe={deleteRecipe}
            />
          );
        })}
      </div>
    </>
  );
}
