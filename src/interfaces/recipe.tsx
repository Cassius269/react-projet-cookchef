export interface recipeI  {
    _id: string,
    title: string,
    imageUrl: string, 
    content: string,
    authorId: string,
    isLiked? : boolean // propriété optionnelle
    note?: number, 
    comments?: string[]
}

export interface recipeForm {
    title: string,
    imageUrl: string, 
    content: string,
    generic?: string
}

export interface recipeCardProps {
    recipe: recipeI,
    updateRecipe?: (x:recipeI) => Promise<void>, 
    deleteRecipe?: (x:string) => Promise<void>  
}

// export type recipeListProps = Omit<RecipeCardProps, "recipe"> & {
//   recipes: recipeI[];
// };

export interface recipeListProps extends Omit<recipeCardProps, "recipe"> {
    recipes: recipeI[]
}