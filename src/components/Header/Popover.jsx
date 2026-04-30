import { NavLink } from "react-router";
import popoverStyles from "../../assets/styles/layouts/PopOver.module.scss";

const Popover = ({ onClick, setIsActive }) => {
  return (
    <>
      <div className="position-relative" onClick={onClick}>
        <ul popover="" id="my-popover" className={popoverStyles.myPopover}>
          <li>
            <NavLink
              to="/admin"
              onClick={() => {
                setIsActive(false);
                console.log(
                  "aller vers la page nouvelle recette depuis popover mobile",
                );
              }}
            >
              Admin
            </NavLink>
          </li>
          <li>
            <NavLink>WishList</NavLink>
          </li>
          <li>
            <NavLink role="button" href="#">
              Connexion
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Popover;
