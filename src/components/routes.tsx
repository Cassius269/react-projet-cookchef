import { createBrowserRouter, redirect } from "react-router";
import App from "../App";
import { lazy } from "react";
import { getRecipeById } from "../apis/recipes";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Signin from "../pages/Signin/Signin";
import { getUserById } from "../apis";
import { getCurrentUser } from "../apis/auth";

const Homepage = lazy(() => import("../pages/Homepage/Homepage"));

const AdminRecipes = lazy(
  () => import("../pages/Admin/pages/AdminRecipes/AdminRecipes"),
);

const AdminUsers = lazy(
  () => import("../pages/Admin/pages/AdminUsers/AdminUsers"),
);

const Admin = lazy(() => import("../pages/Admin/Admin"));

const AdminRecipeForm = lazy(
  () =>
    import("../pages/Admin/pages/AdminRecipes/pages/AdminRecipeForm/AdminRecipeForm"),
);

const AdminRecipesList = lazy(
  () =>
    import("../pages/Admin/pages/AdminRecipes/pages/AdminRecipesList/AdminRecipesList"),
);

const Signup = lazy(
  () => import('../pages/Signup/Signup'),
);

const Signin = lazy(
  () => import('../pages/Signin/Signin'),
);

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    Component: App,
    loader: async () => await getCurrentUser() ,
    hydrateFallbackElement: (<p className="text-center color-secondary">test en cours</p>), 
    children: [
      {
        // path: "/",
        index: true,
        Component: Homepage,
      },
      {
        path: 'signup',
        Component: Signup
      },
      {
        path: 'signin',
        Component: Signin
      },
      {
        path: "admin",
        element:(<ProtectedRoute>
          < Admin />
        </ProtectedRoute>),
        caseSensitive: true,
        
        children: [
          {
            index: true,
            loader: () => redirect("recipes/list"),
          },
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
                loader: () => ({ recipe: null }), // renvoyer une donnée null pour le formulaire en mode création
                Component: AdminRecipeForm,
              },
              {
                path: "edit/:recipeId",
                loader: async ({ params }) => {
                  return { recipe: await getRecipeById(params.recipeId) };
                },
                hydrateFallbackElement: <p>Chargement en cours</p>,
                Component: AdminRecipeForm,
              },
            ],
          },

          {
            path: "users",
            Component: AdminUsers,
          },
          { path: "*", // capturer toutes les sous URL /admin inexistantes vers la page des recettes
            Component: AdminRecipes 
          }, 
        ],
      },
    ],
  },
]);
