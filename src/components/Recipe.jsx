import '../assets/styles/layouts/Recipe.module.scss';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Recipe = ({title, imageUrl, note, numberComments}) => {
console.log(imageUrl)
    const backgroundImage = `url(${imageUrl}`;

    return (
        <article style={{backgroundImage}}>
            <h2>{title}</h2>
            {/* <img className={styles.imageRecipe} src={imageUrl} alt="image représentant le plat" width={200}/> */}
            <p>{noteToStars(note)} 4/5 </p>
            <p>{numberComments} avis </p>
            <button type='button' className='btn btn-primary'>Découvrir</button>
        </article>
    )
}

function noteToStars(note){
    let stars = '';
    for(let i = 0; i < note; i++){
        stars+='★';
        
        if(i >=4) {
            break;
        }
    }

    return stars;
}

export default Recipe;