import { createBrowserRouter } from "react-router";
import App from "../App";
import { lazy } from "react";

const Homepage = lazy(() => import("../pages/Homepage/Homepage"));

const ListRecipes = lazy(
  () => import("../pages/Admin/pages/ListRecipes/ListRecipes"),
);

const Admin = lazy(() => import("../pages/Admin/Admin"));

const RecipeForm = lazy(
  () =>
    import("../pages/Admin/pages/AddRecipe/components/RecipeForm/RecipeForm"),
);

const UpdateRecipe = lazy(
  () => import("../pages/Admin/pages/UpdateRecipe/UpdateRecipe"),
);

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        // path: "/",
        index: true,
        Component: Homepage,
      },
      {
        path: "admin",
        Component: Admin,
        caseSensitive: true,
        children: [
          {
            path: "recipes",
            Component: ListRecipes,
            children: [
              {
                path: "update_recipe/:id",
                Component: UpdateRecipe,
              },
            ],
          },
          {
            path: "recipes/add_recipe",
            Component: RecipeForm,
          },
          { path: "*", Component: ListRecipes }, // capturer toutes les sous URL /admin inexistantes vers la page des recettes
        ],
      },
    ],
  },
]);
