import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { UrlAPIContext } from "../../../../../../context/UrlAPIContext";

function RecipeForm() {
  const BASE_URL_API = useContext(UrlAPIContext);

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
    title: "",
    imageUrl: "",
    content: "",
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
    console.log(BASE_URL_API);
    // const payload = { ...newRecipe };
    clearErrors();

    try {
      const response = await fetch(`${BASE_URL_API}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });

      if (response.ok) {
        const data = await response.json();

        console.log(data);
        reset(defaultValues); // réinitialiser le formulaire avec les valeurs par défaut
      } else {
        // console.log(`Ooops une erreur`);
        setError("generic", {
          type: "server",
          message: "Ooops une erreur",
        });
      }
    } catch (error) {
      // console.log(`Error: ${error.message}`);
      setError("generic", {
        type: "server",
        message: error.message,
      });
    }
  };

  return (
    <>
      <h3 className="text-center mt-4">
        Formulaire de création de nouvelle recette
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
        {errors?.generic && <p>{errors.generic.message}</p>}
      </form>
    </>
  );
}

export default RecipeForm;
