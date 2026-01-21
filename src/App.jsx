import Footer from './components/Footer';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';
import SearchBar from './components/SearchBar';

export default function App(){
    return(
        <>
            <Header />
            <main className='container'>
                <SearchBar />
                <Recipes />
            </main>
            <Footer />
        </>
);
}