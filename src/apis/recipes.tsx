import type { recipeI } from "../interfaces/recipe";

const API_RECIPES = `${import.meta.env.VITEAPI_URL}/api/recipes`;

// Déclaration des fonctions asynchrones du CRUD
// exporter des promises à gérer avec le composant <Suspens>
async function getRecipes(queryParam : URLSearchParams ): Promise<recipeI[]> {
    const response = await fetch(`${API_RECIPES}${queryParam ? `?${queryParam}` : ''}`)

    if(response.ok){
        const data = await response.json();
        return Array.isArray(data) ? data : [data];
    }else {
        throw new Error('Oops erreur de récupération des recettes');
    }
}

async function getRecipeById(_id : string): Promise<recipeI> {
    const response = await fetch(`${API_RECIPES}/${_id}`);

    if(response.ok){
        return await response.json(); 
    }else {
        throw new Error("Oops erreur de récupération d'une recetete ");
    }
}

async function deleteRecipe(_id: string): Promise<string> {
    const response = await fetch(`${API_RECIPES}/${_id}`, { method: 'DELETE'});

    if(response.ok){
        return await response.json(); 
    }else {
        throw new Error("Oops erreur de suppression d'une recetete ");
    }
}

async function createRecipe(newRecipe : Partial<recipeI>): Promise<recipeI> {
    console.log('rrecçu',newRecipe)
    const response = await fetch(`${API_RECIPES}`, {
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

async function updateRecipe(updatedRecipe: Partial<recipeI>): Promise<recipeI> {
    const {_id, ...payload} = updatedRecipe;

    const response = await fetch(`${API_RECIPES}/${_id}`, {
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
