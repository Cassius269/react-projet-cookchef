function Recipe() {
  return (
    <>
      <article className="d-flex flex-row justify-content-between h-auto w-100 mt-2">
        <h5 className="d-flex align-items-center">Titre recette</h5>
        <div className="d-flex gap-1">
          <button type="button" className="btn btn-primary">
            Modifier
          </button>
          <button type="button" className="btn btn-danger">
            Supprimer
          </button>
        </div>
      </article>
    </>
  );
}

export default Recipe;
