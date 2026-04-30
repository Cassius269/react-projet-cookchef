
const URL_RECIPE_URL = 'https://www.restapi.fr/api/recipes';

// Déclaration des fonctions asynchrones du CRUD
// exporter des promises à gérer avec le composant <Suspens>
async function getRecipes(queryParam) {
    const response = await fetch(`${URL_RECIPE_URL}${queryParam ? `?${queryParam}` : ''}`)

    if(response.ok){
        const data = await response.json();
        return Array.isArray(data) ? data : [data];
    }else {
        throw new Error('Oops erreur de récupération des recettes');
    }
}

async function getRecipeById(_id) {
    const response = await fetch(`${URL_RECIPE_URL}/${_id}`);

    if(response.ok){
        return response.json(); 
    }else {
        throw new Error("Oops erreur de récupération d'une recetete ");
    }
}

async function deleteRecipe(_id) {
    const response = await fetch(`${URL_RECIPE_URL}/${_id}`, { method: 'DELETE'});

    if(response.ok){
        return await response.json(); 
    }else {
        throw new Error("Oops erreur de suppression d'une recetete ");
    }
}

async function createRecipe(newRecipe) {
    const response = await fetch(`${URL_RECIPE_URL}`, {
        method:'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newRecipe)
    });

    if(response.ok){
        return await response.json(); 
    }else {
        throw new Error("Oops erreur de création d'une recetete ");
    }
}

async function updateRecipe(updatedRecipe) {
    const {_id, ...payload} = updatedRecipe;

    const response = await fetch(`${URL_RECIPE_URL}/${_id}`, {
        method:'PATCH', 
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(payload)
    });

    if(response.ok){
        return await response.json(); 
    } else {
        throw new Error("Oops erreur de mise à jour d'une recette ");
    }
}

export { createRecipe, updateRecipe, getRecipes, getRecipeById, deleteRecipe };
