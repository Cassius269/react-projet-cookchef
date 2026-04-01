import { useState } from "react";
import styles from "../../../../assets/styles/layouts/Recipe.module.scss";

const Recipe = ({ title, imageUrl, note, numberComments }) => {
  // Définition d'un état de like ou pas
  const [isLiked, setIsLiked] = useState(false);

  // Gestionnaire d'évenement pour changer l'état du composant recette concernant si le bouton Like
  const handleClick = () => setIsLiked(!isLiked);

  return (
    <article onClick={handleClick} className="col-8 col-md-6 col-lg-3">
      <img
        className={styles.imageRecipe}
        src={imageUrl}
        alt={title}
        loading="lazy"
      />
      <h2 className="bg-danger">{title}</h2>
      <p>
        {noteToStars(note)} {Math.trunc(note * 5)}/5{" "}
      </p>
      <p>{numberComments} avis </p>
      <i
        role="button"
        className={`bi bi-heart-fill fs-5 d-block-inline m-auto ${isLiked ? "text-danger" : ""}`}
      ></i>
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
