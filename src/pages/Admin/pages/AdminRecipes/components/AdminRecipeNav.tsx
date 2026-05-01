import { NavLink } from "react-router";
import styles from "../../../../../assets/styles/layouts/AdminNav.module.scss";

function AdminRecipeNav() {
  return (
    <>
      <nav className={`${styles.nav} border pt-3 ms-3 bg-warning-subtle`}>
        <ul className="d-flex gap-4">
          <li>
            <NavLink
              to="/admin/recipes"
              className={({ isActive }) =>
                `${isActive ? "bg-danger text-white rounded-2" : "link-dark bg-white"}  p-2`
              }
            >
              Liste des recettes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/recipes/new"
              className={({ isActive }) =>
                `${isActive ? "bg-danger text-white rounded-2" : "link-dark bg-white"}  p-2`
              }
            >
              Ajouter
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default AdminRecipeNav;
