import Footer from './components/Footer';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';

export default function App(){
    return(
        <>
            <Header />
            <main className='container'>
                <Recipes />
            </main>
            <Footer />
        </>
);
}