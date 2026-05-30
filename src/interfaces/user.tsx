export interface userI{
    _id: string, 
    firstname: string,
    lastname: string,
    email: string,
    password?: string,
    confirmPassword?: string, // mot de passe optionnel de confirmation
    createdAt?: string, // propriété optionnelle
    updatedAt?: string // propriété optionnelle
}

export interface userForm {
    firstname?: string, // propriété optionnelle
    lastname?: string, // propriété optionnelle
    email: string,
    password: string
}

export interface userList {
    users: userI[]
}