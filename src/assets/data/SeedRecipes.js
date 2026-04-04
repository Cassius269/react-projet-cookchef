import data from './recipes.json';

async function SeedRecipes(){
        try{
            const response = await fetch('https://www.restapi.fr/api/recipes', {
                method: 'POST', 
                body: JSON.stringify(data), // stringifier la recette en tant que charge utile de la requête POST
                headers: { "Content-Type": "application/json"}
            });

            if(response.ok){
                const data= await response.json();
                console.log('Peuplement de l\'API', data);
            }else {
                console.log('Ooops, une erreur');
            }
        }catch(error){
            console.log(`Erreur: ${error.message}`);
        }
        };

    // Export nommé du module SeedRecipes
export { SeedRecipes };