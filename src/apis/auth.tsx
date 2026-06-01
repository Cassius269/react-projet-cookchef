import type { userI } from "../interfaces/user";

const API = import.meta.env.VITE_API_URL;
console.log(import.meta.env.VITE_API_URL);    

// Requête de connexion 
async function signin(credentials: userI){
try {
        const response = await fetch(`${API}/api/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
            credentials: 'include'
        })

        const body = await response.json();
        if(response.ok){
            return body;
        }else {
            throw body;
        }
    } catch (error) {
        throw new Error(error.message || 'Réponse serveur invalide', {cause: error})
    }
}

// Réquête pour récupérer l'utilisateur courant
async function getCurrentUser(){
    try {
        const response = await fetch(`${API}/api/me`,{
            credentials: 'include'
        });

        const body = await response.json();

        if(response.ok){
            return { user :body  }
        }else {
            throw  body;
        }
    } catch (error) {
       return {error: error.message}
    }
}

// Requête de déconnexion
async function signout(){
    try {
        const response = await fetch(`${API}/api/logout`, {
            method: 'DELETE',
            credentials: 'include'
        })

        const body = await response.json();
        if(response.ok){
            return body;
        }else {
            throw body;
        }
    } catch (error) {
        throw new Error(error.message || 'Réponse serveur ivalide', {cause: error})
    }
}

export {signin, getCurrentUser, signout}