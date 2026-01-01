import Footer from './components/Footer';
import Header from './components/Header';
import Recipe from './components/Recipe';

export default function App(){
    return(
        <>
            <Header />
            <main>
                <h1 className='text-primary'>Cookchef</h1>
                <div>
                    <Recipe title="Huîtres chaudes, sauce acidulée" imageUrl="https://assets.afcdn.com/recipe/20151102/21234_w1024h768c1cx1500cy2250.jpg" note={4} numberComments="5" />
                    <Recipe title="Huîtres chaudes, sauce acidulée" imageUrl="https://assets.afcdn.com/recipe/20151102/21234_w1024h768c1cx1500cy2250.jpg" note={4} numberComments="5" />
                    <Recipe title="Huîtres chaudes, sauce acidulée" imageUrl="https://assets.afcdn.com/recipe/20151102/21234_w1024h768c1cx1500cy2250.jpg" note={4} numberComments="5" />
                </div>    
            </main>
            <Footer />
        </>
);
}