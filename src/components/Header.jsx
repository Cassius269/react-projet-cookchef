const Header = () => {
    return (
        <header className="container-fluid border border-2 p-2 d-flex justify-content-between">
            <div>
                <i className="bi bi-list text-primary fs-2"></i>
                <a href="/"><img className="mb-3 ms-3" src="https://svgsilh.com/svg/303194.svg" alt="logo" width={30}/></a>
            </div>
            <div className="d-flex justify-content-around gap-3 gap-md-5 align-items-center">
                <button type="button" className="btn btn-secondary d-flex align-items-center gap-2 rounded-3 h-75 p-3"><i class="bi bi-basket"></i>Panier</button>
                <button type="button" className="btn btn-dark  h-75">Connexion</button>
            </div>
        </header>
    )
};

export default Header;