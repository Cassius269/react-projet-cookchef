import { useContext, useState } from "react";
import styles from "../../../../assets/styles/layouts/Recipe.module.scss";
import { UrlAPIContext } from "../../../../context/UrlAPIContext";
import Loading from "../../../../components/Loading";

const Recipe = ({ recipe, toggleLikedRecipe, deleteRecipe }) => {
  console.log("resultat", recipe);
  // Récupéer l'URL de l'API des recettes depuis le contexte de l'app
  const BASE_URL_API = useContext(UrlAPIContext);

  // Déclaration de l'état du composant
  const [isLoading, setIsLoading] = useState(false);

  // Gestionnaire d'évenement pour changer l'état du composant recette concernant si le bouton Like
  const handleClickLikeRecipe = () => {
    const updateRecipeFromAPI = async (recipeToUpdate) => {
      const { _id, ...payload } = recipeToUpdate;
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL_API}/${recipeToUpdate._id}`, {
          method: "PATCH",
          body: JSON.stringify({ ...payload }),
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Réponse du serveur", data);
          toggleLikedRecipe(recipeToUpdate); // mettre à jour l'état local de la recette
        } else {
          console.log("Ooops, une erreur");
        }
      } catch (error) {
        console.log(`Erreur: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    updateRecipeFromAPI({ ...recipe, isLiked: !recipe.isLiked });
  };

  const handleClickDeleteRecipe = async (_id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const data = await response.json();
        deleteRecipe(_id);
        console.log(data);
      } else {
        console.log("Ooops une erreur");
      }
    } catch (error) {
      console.log(`Erreur : ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  // Mettre à jour la wishlist
  return (
    <article className="col-8 col-md-6 col-lg-3 position-relative">
      <button
        className="btn btn-danger w-25 position-absolute"
        onClick={() => handleClickDeleteRecipe(recipe._id)}
      >
        <i className="bi bi-trash"></i>
      </button>
      <img
        className={styles.imageRecipe}
        src={recipe.imageUrl}
        alt={recipe.title}
        loading="lazy"
      />
      <h2 className="bg-danger">{recipe.title}</h2>
      <p>
        {noteToStars(recipe.note)} {Math.trunc(recipe.note * 5)}/5{" "}
      </p>
      <p>{recipe.comments.length} avis </p>
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

function noteToStars(note) {
  let stars = "";
  let limit = Math.trunc(note * 5);

  for (let i = 0; i < limit; i++) {
    stars += "★";
  }

  return stars;
}

export default Recipe;
