import { NavLink } from "react-router";
import styles from "../../../assets/styles/layouts/AdminNav.module.scss";

function AdminNav() {
  return (
    <>
      <nav className={`${styles.nav}border pt-3 ms-3 bg-warning-subtle`}>
        <ul className="d-flex flex-column pe-4 gap-4 mt-2">
          <li>
            <NavLink
              to="recipes"
              className={({ isActive }) =>
                `${isActive ? "bg-danger text-white rounded-2" : "link-dark bg-white"}  p-2`
              }
            >
              Recettes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="users"
              className={({ isActive }) =>
                `${isActive ? "bg-danger text-white rounded-2" : "link-dark bg-white"} p-2`
              }
            >
              Utilisateurs
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default AdminNav;
