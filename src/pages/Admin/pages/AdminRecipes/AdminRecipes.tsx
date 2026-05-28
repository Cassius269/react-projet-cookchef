import { Outlet } from "react-router";
import { Suspense } from "react";

function AdminRecipes() {
  return (
    <>
      <h3 className="text-center">Gestion des recettes</h3>
      {/** Rendre les routes enfants d'AdminRecipes */}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default AdminRecipes;
