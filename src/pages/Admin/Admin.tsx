import { NavLink, Outlet } from "react-router";
import RecipeForm from "./pages/AdminRecipes/pages/AdminRecipeForm/AdminRecipeForm";
import { Suspense } from "react";
import AdminNav from "./components/AdminNav";

function Admin() {
  return (
    <section className="mt-5 d-flex">
      {/* <h1>Admin</h1> */}
      {/**Navigation admin */}
      <div className="d-flex">
        <AdminNav />
      </div>
      <div className="d-flex flex-column w-100">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
}

export default Admin;
