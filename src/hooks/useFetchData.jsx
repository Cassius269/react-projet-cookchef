import { useEffect, useState } from "react";

function useFetchData(url, page) {
  // Déclaration de l'état du composant
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Récupérer les recettes de l'API après le rendu composant Homepage
  useEffect(() => {
    let cancel = false;
    const getDataFromAPI = async () => {
      try {
        setIsLoading(true);
        let queryParams = new URLSearchParams();
        if (page) {
          queryParams.append("limit", 10);
          queryParams.append("skip", (page - 1) * 10);
          queryParams.append("sort", "createdAt:desc");
        }
        const response = await fetch(`${url}?${queryParams}`);

        // si la réponse est ok et que la requête n'est pas annulée
        if (response.ok && !cancel) {
          const newData = await response.json();
          console.log(newData);
          // Création d'une fonction d'update pour éviter les récette en tant que dépendance (ce qui provoquerait une boucle infinie)
          setData((prev) => {
            return Array.isArray(newData)
              ? [...prev, ...newData]
              : [...prev, newData];
          }); // si c'est la donnée est un tableau on met dans l'état des recettes directement sinonen créer un nouveau tableau
        } else {
          console.log("Ooops, une erreur");
        }
      } catch (error) {
        console.log(`Erreur: ${error.message}`);
      } finally {
        // si la requête est terminée et qu'elle n'a pas été annulée, mettre le loading à false
        if (!cancel) {
          setIsLoading(false);
        }
      }
    };

    // Appel de la fonction de récupération des recettes depuis l'API
    getDataFromAPI();

    // Fonction de clean-up
    return () => (cancel = true);
  }, [url, page]);

  // console.log(recipes);

  // Les valeurs à retourner par le hook personnalisé
  data;
  return { data, setData, isLoading };
}

export default useFetchData;
