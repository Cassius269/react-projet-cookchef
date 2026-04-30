import { createBrowserRouter, redirect } from "react-router";
import App from "../App";
import { lazy } from "react";

const Homepage = lazy(() => import("../pages/Homepage/Homepage"));

const AdminRecipes = lazy(
  () => import("../pages/Admin/pages/AdminRecipes/AdminRecipes"),
);

const AdminUsers = lazy(
  () => import("../pages/Admin/pages/AdminUsers/AdminUsers"),
);

const Admin = lazy(() => import("../pages/Admin/Admin"));

const RecipeForm = lazy(
  () =>
    import("../pages/Admin/pages/AdminRecipes/pages/AdminRecipeForm/AdminRecipeForm"),
);

const AdminRecipeForm = lazy(
  () => import("../pages/Admin/pages/AdminRecipes/components/AdminRecipeForm"),
);

const AdminRecipesList = lazy(
  () =>
    import("../pages/Admin/pages/AdminRecipes/pages/AdminRecipesList/AdminRecipesList"),
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
            Component: AdminRecipes,
            children: [
              {
                index: true,
                loader: async () => redirect("list"),
              },
              {
                path: "list",
                Component: AdminRecipesList,
              },
              {
                path: "new",
                Component: RecipeForm,
              },
              {
                path: "edit/:recipeId",
                Component: AdminRecipeForm,
              },
            ],
          },

          {
            path: "users",
            Component: AdminUsers,
          },
          { path: "*", Component: AdminRecipes }, // capturer toutes les sous URL /admin inexistantes vers la page des recettes
        ],
      },
    ],
  },
]);
