function Recipe() {
  return (
    <>
      <article className="d-flex">
        <h3>Titre recette</h3>
        <button type="button" className="btn btn-primary">
          Modifier
        </button>
        <button type="button" className="btn btn-danger">
          Supprimer
        </button>
      </article>
    </>
  );
}

export default Recipe;
