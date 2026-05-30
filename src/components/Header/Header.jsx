import { useContext, useState } from "react";
import styles from "../../assets/styles/layouts/Header.module.scss";
import Popover from "./Popover";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);

  const handleClick = () => {
    setIsActive(!isActive); // Changer la valeur de l'état et re-render le composant <Header />
  };

  return (
    <header className="container-fluid border border-2 p-2 d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <NavLink to="/">
          <img
            className="ms-3"
            src="https://svgsilh.com/svg/303194.svg"
            alt="logo"
            width={30}
          />
        </NavLink>
      </div>

      <ul
        id={styles.divButtons}
        className="d-flex flex-direction-row gap-4 gap-md-5 align-items-center"
      >
        {currentUser && (
          <>
            {currentUser.role === "admin" && (
              <li>
                <NavLink to="/admin">
                  <button
                    onClick={() =>
                      console.log(
                        "Aller vers la page ajout de recette depuis le header desktop",
                      )
                    }
                    type="button"
                    className="btn btn-secondary d-flex align-items-center gap-2 rounded-3 p-3 text-white"
                  >
                    <i className="bi bi-plus"></i>
                    Admin
                  </button>
                </NavLink>
              </li>
            )}

            <li>
              <NavLink to="#">
                <button
                  type="button"
                  className="btn btn-secondary d-flex align-items-center gap-2 rounded-3 p-3 text-white"
                >
                  <i className="bi bi-heart-fill"></i>
                  WishList
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => logout()} to="">
                <button type="button" className="btn btn-dark">
                  Déconnexion
                </button>
              </NavLink>
            </li>
          </>
        )}
        {!currentUser && (
          <>
            <li>
              <NavLink to="signup">
                <button type="button" className="btn btn-success">
                  Inscription
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="signin">
                <button type="button" className="btn btn-primary">
                  Connexion
                </button>
              </NavLink>
            </li>
          </>
        )}
      </ul>

      {/* Header mobile */}
      {isActive && <Popover setIsActive={setIsActive} />}
      <i
        popoverTarget="my-popover"
        role="button"
        onClick={handleClick}
        id={styles.burgerIcon}
        className={`d-sm-block text-secondary d-md-none bi bi-${isActive ? "circle text-danger" : "list"} text-primary fs-1`}
        style={{ zIndex: 40 }}
      ></i>
    </header>
  );
}

export default Header;
