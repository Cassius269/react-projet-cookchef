import '../assets/styles/layouts/Footer.module.scss';

export default function Footer(){
    const date = new Date();

    return (
        <footer className='container-fluid text-primary'>
            <p>Droits d'auteur @{date.getFullYear()} Cookchef</p>
        </footer>
    );
}