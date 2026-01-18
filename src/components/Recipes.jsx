import Recipe from "./Recipe";
import recipes from "../assets/data/recipes.json";

export default function Recipes(){
    const data = [...recipes]; // si usage prévu de filtre ou de tri
    console.log("data",data);

    return (
        <section>
            <h1 className='text-primary'>Découvrez nos nouvelles recettes</h1>
            <div className='row d-flex justify-content-center gap-4 gap-md-4 gap-lg-5'>
                {data.map(r =>  {
                    return (
                        <Recipe 
                            key={r.id}
                            title={r.title} 
                            imageUrl= {r.imageUrl}
                            note={r.note} 
                            numberComments={r.comments.length} 
                        />
                    )
                    })
                }
            </div>
        </section>       
    )
}