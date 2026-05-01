import { NavLink } from "react-router";

function Recipe({ recipe, deleteRecipe }) {
  return (
    <>
      <article className="d-flex flex-row justify-content-between h-auto w-100 mt-2">
        <h5 className="d-flex align-items-center">{recipe.title}</h5>
        <div className="d-flex gap-1">
          <NavLink to={`/admin/recipes/edit/${recipe._id}`}>
            <button type="button" className="btn btn-primary">
              Modifier
            </button>
          </NavLink>
          <button
            onClick={() => deleteRecipe(recipe._id)}
            type="button"
            className="btn btn-danger"
          >
            Supprimer
          </button>
        </div>
      </article>
    </>
  );
}

export default Recipe;
