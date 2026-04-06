// Import de la data des recettes
import { useState } from "react";
import Recipe from "./Recipes/Recipe";

function SearchBar({ recipes }) {
  const [results, setResults] = useState([]);

  // Désactiver le comportement par défaut de soumission de formulaire (éviter le chargement de page)
  const handleSubmit = (e) => e.preventDefault();

  // A chaque input tapé, faire une recherche instantanné sur les recettes pour trouver une équivalence
  const handleInput = (e) => {
    const q = e.target.value;
    console.log(`q vaut ${q}`);
    const search = recipes.filter((r) =>
      r.title.toLowerCase().includes(q.toLowerCase()),
    ); // chercher les occurences du mot tapé dans les titres de recette
    console.log(`Résultat : ${search}`);

    setResults(search);

    // Si barre de recherche vide, réinitiliser les résultats
    if (!q) {
      setResults([]);
    }
  };

  // Si réponse renvoyer un markup de résultat et enlever  les récettes par défaut du main
  // console.log(data)
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        action="#"
        className="d-flex w-75 mt-5 mb-5 gap-3 m-auto"
      >
        <input
          onInput={(e) => handleInput(e)}
          type="search"
          name="recipe-search"
          className="form-control"
          placeholder="une inspiration de recette à chercher ?"
        />
        <button type="submit" className="btn btn-primary">
          Rechercher
        </button>
      </form>
      {results.length > 0 && (
        <section className="p-3">
          <h2>Résultats {results.length}</h2>
          <div className="d-flex justify-content-around flex-wrap gap-4 gap-md-1">
            {results.map((r) => {
              return <Recipe key={r._id} recipe={r} />;
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default SearchBar;
