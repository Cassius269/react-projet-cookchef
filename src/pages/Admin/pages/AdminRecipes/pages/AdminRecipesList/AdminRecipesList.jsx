import { Outlet } from "react-router";
import HeaderAdmin from "../../components/AdminRecipeNav";
import Recipe from "../../components/Recipe";

function AdminRecipesList() {
  return (
    <>
      <HeaderAdmin />
      <ul className="ps-3">
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
        <li>
          <Recipe />
        </li>
      </ul>
    </>
  );
}

export default AdminRecipesList;
