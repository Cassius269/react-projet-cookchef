
async function SeedRecipes(){
    let recipes = async () => {
       return fetch('/src/assets/data/recipes.json')
        .then( response => response.json())
        .catch(error => console.log(`Erreur: ${error.message}`))
    }

    let sendRecipeToAPI = async (recipeToSend) => {
        try{
            const response = await fetch('https://www.restapi.fr/api/recipes', {
                method: 'POST', 
                body: JSON.stringify(recipeToSend), // stringifier la recette en tant que charge utile de la requête POST
                headers: { "Content-Type": "application/json"}
            });

            if(response.ok){
                const data= await response.json();
                console.log('test', data);
            }else {
                console.log('Ooops, une erreur');
            }
        }catch(error){
            console.log(`Erreur: ${error.message}`);
        }
        };

        // Récupérer le résultat de la récupération des recettes
       const data = await recipes();

       console.log('Les datas locales',data);

       // A partir des données locales, envoyer chacune à l'API
       data.forEach(recipe => {
            sendRecipeToAPI(recipe);
        });
    }
   

    // Export nommé du module SeedRecipes
export { SeedRecipes };