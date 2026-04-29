import { NavLink } from "react-router";

function HeaderAdmin() {
  return (
    <>
      <nav className="border pt-3 ms-3 flex-fill">
        <ul>
          <li>
            <NavLink to="/admin/recipes">Liste</NavLink>
          </li>
          <li>
            <NavLink to="/admin/recipes/add_recipe">Ajouter</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HeaderAdmin;
