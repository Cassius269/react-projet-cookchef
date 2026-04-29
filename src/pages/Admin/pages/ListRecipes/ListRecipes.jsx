import { Outlet } from "react-router";
import HeaderAdmin from "./components/HeaderAdmin";
import Recipe from "./components/Recipe";

function ListRecipes() {
  return (
    <>
      <h2 className="text-center mt-5 mb-3">Partie recettes</h2>
      <HeaderAdmin />
      <section>
        <ul>
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
      </section>
    </>
  );
}

export default ListRecipes;
