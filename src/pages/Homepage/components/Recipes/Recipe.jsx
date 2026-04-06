import { useContext, useState } from "react";
import styles from "../../../../assets/styles/layouts/Recipe.module.scss";
import { UrlAPIContext } from "../../../../context/UrlAPIContext";
import Loading from "../../../../components/Loading";

const Recipe = ({ recipe, updateRecipe }) => {
  // Récupéer l'URL de l'API des recettes depuis le contexte de l'app
  const BASE_URL_API = useContext(UrlAPIContext);

  // Déclaration de l'état du composant
  const [isLoading, setIsLoading] = useState(false);

  // Gestionnaire d'évenement pour changer l'état du composant recette concernant si le bouton Like
  const handleClick = () => {
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
          updateRecipe(recipeToUpdate); // mettre à jour l'état local
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

  // Mettre à jour la wishlist
  return (
    <article className="col-8 col-md-6 col-lg-3">
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
          onClick={handleClick}
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
