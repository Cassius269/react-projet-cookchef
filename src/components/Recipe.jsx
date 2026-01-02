import styles from'../assets/styles/layouts/Recipe.module.scss';

const Recipe = ({title, imageUrl, note, numberComments}) => {
console.log(imageUrl)
    // const backgroundImage = `url(${imageUrl}`;

    return (
        <article className="col-8 col-md-6 col-lg-3">
            <img className={`w-100 overflow-hidden ${styles.imageRecipe}`} src={imageUrl} alt="image représentant le plat" width={200}/>
            <h4>{title}</h4>
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