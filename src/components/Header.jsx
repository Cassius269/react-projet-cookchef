import '../assets/styles/layouts/Header.module.scss';

const Header = () => {
    return (
        <header className="container-fluid border border-2 p-2 d-flex justify-content-between">
            <div className='d-flex align-items-center'>
                <i className="bi bi-list text-primary fs-1"></i>
                <a href="/"><img className="ms-3" src="https://svgsilh.com/svg/303194.svg" alt="logo" width={30}/></a>
            </div>
            <div className="d-flex justify-content-around gap-4 gap-md-5 align-items-center">
                <button type="button" className="btn btn-secondary d-flex align-items-center gap-2 rounded-3 p-3"><i className="bi bi-basket"></i>Panier</button>
                <button type="button" className="btn btn-dark">Connexion</button>
            </div>
        </header>
    )
};

export default Header;