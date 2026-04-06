import Recipe from "./Recipe";

export default function Recipes({ recipes, updateRecipe }) {
  return (
    <>
      <h1 className="text-primary">Découvrez nos nouvelles recettes</h1>
      <div className="row d-flex justify-content-center gap-4 gap-md-4 gap-lg-5">
        {recipes.map((r) => {
          return <Recipe key={r._id} recipe={r} updateRecipe={updateRecipe} />;
        })}
      </div>
    </>
  );
}
