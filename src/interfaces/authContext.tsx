import type { userI } from "./user";

export interface authContext {
    currentUser: userI | null,
    login: (credential : userI) => Promise<void>,
    logout: ()=> Promise<void>
}