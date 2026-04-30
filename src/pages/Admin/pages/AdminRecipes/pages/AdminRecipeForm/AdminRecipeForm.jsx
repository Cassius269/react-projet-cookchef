import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useLoaderData, useNavigate } from "react-router";
import AdminRecipeNav from "../../components/AdminRecipeNav";
import { createRecipe, updateRecipe } from "../../../../../../api";

function RecipeForm() {
  // Récupérer la recette courante si mode édition
  const { recipe } = useLoaderData();

  // Mise en place de la navigation programmatique
  const navigate = useNavigate();

  // Schéma de validation
  const recipeSchema = yup.object({
    title: yup
      .string("Doit être du texte")
      .required("Le titre est obligatoire")
      .min(10, "Minimum 10 caractères")
      .max(40, "Maximum 40 caractères"),
    imageUrl: yup
      .string("Doit être du texte")
      .required("L'image est obligatoire")
      .url("L'image doit être un lien valide")
      .min(10, "Minimum 10 caractères")
      .max(100, "Maximum 100 caractères"),
    content: yup
      .string("Doit être du texte")
      .required("Le contenu est obligatoire")
      .min(100, "Minimum 100 caractères")
      .max(1000, "Maximum 1000 caractères"),
  });

  // Gestion du formulaire
  const defaultValues = {
    title: recipe?.title ?? "",
    imageUrl: recipe?.imageUrl ?? "",
    content: recipe?.content ?? "",
  };

  const {
    register,
    formState: { errors, isSubmitting },
    reset,
    setError,
    clearErrors, // vider les erreurs
    handleSubmit,
  } = useForm({
    defaultValues: defaultValues,
    criteriaMode: "all",
    resolver: yupResolver(recipeSchema),
  });

  // Envoi des données à l'API
  const onSubmit = async (newRecipe) => {
    console.log(newRecipe);

    try {
      clearErrors();
      if (recipe) {
        await updateRecipe({ ...newRecipe, _id: recipe._id });
      } else {
        await createRecipe(newRecipe); // envoyer la recette à l'API
      }
      reset(defaultValues); // réinitialiser le formulaire avec les valeurs par défaut
      navigate("../"); // rediriger l'utilisateur à la page d'accueil
    } catch (error) {
      setError("generic", { type: "generic", message: "Il y a une erreur" });
    }
  };

  return (
    <>
      <AdminRecipeNav />
      <h3 className="text-center mt-4">
        {recipe
          ? " Formulaire de mise à jour de recette"
          : " Formulaire de création de nouvelle recette"}
      </h3>
      <form
        action="#"
        method="POST"
        className="border rounded-2 p-5 m-auto mt-4"
        style={{ width: 500 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mt-4">
          <label htmlFor="title" className="form-label">
            Titre de la recette
          </label>
          <input
            {...register("title")}
            type="text"
            id="title"
            className="form-control"
          />
          {errors?.title && (
            <ul>
              {Object.keys(errors.title.types).map((k) => (
                <li key={k} className="text-danger">
                  {errors.title.types[k]}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="imageUrl" className="form-label">
            Image de la recette
          </label>
          <input
            {...register("imageUrl")}
            type="text"
            id="imageUrl"
            className="form-control"
          />
          {errors?.imageUrl && (
            <ul>
              {Object.keys(errors.imageUrl.types).map((k) => (
                <li key={k} className="text-danger">
                  {errors.imageUrl.types[k]}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="content" className="form-label">
            Contenu de la recette
          </label>
          <textarea
            {...register("content")}
            id="content"
            className="form-control"
          ></textarea>
          {errors?.content && (
            <ul>
              {Object.keys(errors.content.types).map((k) => (
                <li key={k} className="text-danger">
                  {errors.content.types[k]}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-secondary text-white mt-5"
          disabled={isSubmitting}
        >
          Sauvegarder
        </button>
        {errors?.generic && (
          <p className="text-danger mt-1">{errors.generic.message}</p>
        )}
      </form>
    </>
  );
}

export default RecipeForm;
