import styles from'../assets/styles/layouts/Recipe.module.scss';

const Recipe = ({title, imageUrl, note, numberComments}) => {
console.log(imageUrl)
    // const backgroundImage = `url(${imageUrl}`;

    return (
        <article className="col-8 col-md-6 col-lg-3">
            <img className={`w-100 overflow-hidden ${styles.imageRecipe}`} src={imageUrl} alt={title} width={200} loading='lazy'  />
            <h2>{title}</h2>
            <p>{noteToStars(note)} {Math.trunc(note*5)}/5 </p>
            <p>{numberComments} avis </p>
            <button type='button' className='btn btn-primary'>Découvrir</button>
        </article>
    )
}

function noteToStars(note){
    let stars = '';
    let limit = Math.trunc(note*5);

    for(let i = 0; i < limit; i++){
        stars+='★';
    }

    return stars;
}

export default Recipe;