import { NavLink, Outlet } from "react-router";
import RecipeForm from "./pages/AddRecipe/components/RecipeForm/RecipeForm";
import { Suspense } from "react";

function Admin() {
  return (
    <section className="mt-5">
      <h1>Admin</h1>
      {/**Navigation admin */}
      <div className="d-flex flex-column">
        <nav className="border pt-3 ms-3">
          <ul>
            <li>
              <NavLink to="recipes">recettes</NavLink>
            </li>
            <li>
              <NavLink to="users">Utilisateurs</NavLink>
            </li>
          </ul>
        </nav>
        <Suspense
          fallback={
            <p className="text-center text-warning mt-5 vh-100">
              Chargement en cours
            </p>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
}

export default Admin;
