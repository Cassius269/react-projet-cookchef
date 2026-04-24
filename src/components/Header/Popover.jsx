import popoverStyles from "../../assets/styles/layouts/PopOver.module.scss";

const popover = ({ onClick, setPage }) => {
  return (
    <>
      <div className="position-relative" onClick={onClick}>
        <ul popover="" id="my-popover" className={popoverStyles.myPopover}>
          <li>
            <a role="button" href="#" onClick={() => setPage("admin")}>
              <i className="bi bi-plus"></i> Ajouter une Recette
            </a>
          </li>
          <li>
            <a role="button" href="#">
              WishList
            </a>
          </li>
          <li>
            <a role="button" href="#">
              Connexion
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default popover;
