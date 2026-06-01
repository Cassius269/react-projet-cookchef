import { NavLink } from "react-router";
import popoverStyles from "../../assets/styles/layouts/PopOver.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Popover = ({ setIsActive }) => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <>
      <div className="position-relative">
        <ul popover="" id="my-popover" className={popoverStyles.myPopover}>
          {currentUser ? (
            <>
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
                    logout();
                    console.log("Se déconnecter depuis popover mobile");
                  }}
                >
                  Déconnexion
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  onClick={() => {
                    setIsActive(false);
                    console.log(
                      "aller vers la page d'inscription depuis popover mobile",
                    );
                  }}
                  to="/signup"
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
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Popover;
