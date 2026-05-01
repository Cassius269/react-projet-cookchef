import { useState } from "react";
import styles from "../../../../assets/styles/layouts/Recipe.module.scss";
import Loading from "../../../../components/Loading";
import type { recipeCardProps } from "../../../../interfaces";

const Recipe = ({ recipe, updateRecipe, deleteRecipe }: recipeCardProps) => {
  console.log("resultat", recipe);

  // Déclaration de l'état du composant
  const [isLoading, setIsLoading] = useState(false);

  // Gestionnaire d'évenement pour changer l'état du composant recette concernant si le bouton Like
  const handleClickLikeRecipe = () => {
    updateRecipe?.({ ...recipe, isLiked: !recipe.isLiked }); // utilisation de la méthode optionnelle de l'interface recipe
  };

  const handleClickDeleteRecipe = (_id: string) => {
    deleteRecipe?.(_id); // utilisation de la méthode optionnelle de l'interface recipe
  };
  // Mettre à jour la wishlist
  return (
    <article className="col-8 col-md-6 col-lg-3 position-relative">
      {/* <button
        className="btn btn-danger w-25 position-absolute"
        // onClick={() => handleClickDeleteRecipe(recipe._id)}
      > */}
      <i
        onClick={() => handleClickDeleteRecipe(recipe._id)}
        className="bi bi-trash position-absolute top-0 end-0 fs-2 bg-danger text-white rounded-5 ps-3 pe-3 pt-2 pb-2 me-3 mt-3 shadow"
      ></i>
      {/* </button> */}
      <img
        className={styles.imageRecipe}
        src={recipe.imageUrl}
        alt={recipe.title}
        loading="lazy"
      />
      <h2 className="bg-danger">{recipe.title}</h2>
      {recipe.note ? (
        <p>
          {noteToStars(recipe.note)} {Math.trunc(recipe.note * 5)}/5{" "}
        </p>
      ) : (
        ""
      )}

      {recipe.comments?.length && <p> {recipe.comments?.length} avis </p>}
      {isLoading ? (
        <Loading isLarge={false} />
      ) : (
        <i
          onClick={handleClickLikeRecipe}
          role="button"
          className={`bi bi-heart-fill fs-5 d-block-inline m-auto ${recipe.isLiked ? "text-danger" : ""}`}
        ></i>
      )}
    </article>
  );
};

function noteToStars(note: number) {
  let stars = "";
  let limit = Math.trunc(note * 5);

  for (let i = 0; i < limit; i++) {
    stars += "★";
  }

  return stars;
}

export default Recipe;
