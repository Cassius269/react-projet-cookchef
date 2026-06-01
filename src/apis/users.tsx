import type { userI } from "../interfaces/user";

const API_USERS = `${import.meta.env.VITEAPI_URL}/api/users`;
console.log('API_USERS', API_USERS);
// Déclaration des fonctions asynchrones du CRUD
// exporter des promises à gérer avec le composant <Suspens>
async function getUsers(queryParam : URLSearchParams ): Promise<userI[]> {
    const response = await fetch(`${API_USERS}${queryParam ? `?${queryParam}` : ''}`)

    if(response.ok){
        const data = await response.json();
        return Array.isArray(data) ? data : [data];
    }else {
        throw new Error('Oops erreur de récupération des utilisateurs');
    }
}

async function getUserById(_id : string): Promise<userI> {
    const response = await fetch(`${API_USERS}/${_id}`);

    if(response.ok){
        return await response.json(); 
    }else {
        throw new Error("Oops erreur de récupération d'un utilisateur ");
    }
}

async function deleteUser(_id: string): Promise<string> {
    const response = await fetch(`${API_USERS}/${_id}`, { method: 'DELETE'});

    if(response.ok){
        return await response.json(); 
    }else {
        throw new Error("Oops erreur de suppression d'un utilisateur ");
    }
}

async function createUser(newUser : Partial<userI>): Promise<userI> {
    const response = await fetch(`${API_USERS}`, {
        method:'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newUser)
    });

    if(response.ok){
        return await response.json(); 
    }else {
        throw new Error((await response.json()).message || "Oops erreur de suppression d'un utilisateur ");
    }
}

async function updateUser(updatedUser: Partial<userI>): Promise<userI> {
    const {_id, ...payload} = updatedUser;

    const response = await fetch(`${API_USERS}/${_id}`, {
        method:'PATCH', 
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(payload)
    });

    if(response.ok){
        return await response.json(); 
    } else {
        throw new Error("Oops erreur de mise à jour d'un utilisateur ");
    }
}

export { createUser, updateUser, getUsers, getUserById, deleteUser };
