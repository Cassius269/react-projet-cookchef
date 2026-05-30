import { NavLink } from "react-router";
import popoverStyles from "../../assets/styles/layouts/PopOver.module.scss";

const Popover = ({setIsActive }) => {
  return (
    <>
      <div className="position-relative">
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
            <NavLink to="#">WishList</NavLink>
          </li>          
          <li>
            <NavLink 
              onClick={() => {
                  setIsActive(false);
                  console.log(
                    "aller vers la page d'inscription depuis popover mobile",
                  );
                }}          to="/signup"
              >
              Inscription
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/signin"
              onClick={() => {
                  setIsActive(false);
                  console.log(
                    "aller vers la page de connexion depuis popover mobile",
                  );
                }}    
            >
              Connexion
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Popover;
