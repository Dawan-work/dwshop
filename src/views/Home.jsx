
export const Home = () => {
  return (

    <div>
      {/* HERO */}
      <div className="h-10 hero">
        <div className="container mx-auto px-4">
                 <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold">Des produits rares et exclusifs à portée de  <span className="text-secondary">clic !</span></h1>
       <p className="italic text-sm lg:text-xl">Notre sélection de produits gaming rares et difficiles à trouver ailleurs vous propose les dernières innovations et tendances du monde du jeu vidéo.
        <br />Chaque article a été soigneusement choisi pour vous offrir une expérience de jeu unique et immersive.</p>
        </div> 
  
        <div className="flex flex-col lg:flex-row justify-center gap-3">
           <button className="btn w-full">
               Voir les produits
           </button>
           <button className="btn w-full btn-secondary">
               En savoirs plus
           </button>
        </div>
      </div>
      <div className="container mx-auto px-4 my-5">
            {/* SERVICES */}
            <h2 className="text-3xl font-semibold">Nos services</h2>
            <div className="divider divider-secondary"></div>

           {/* LAST PRODUCTS */}
           <h2 className="text-3xl font-semibold">Nos derniers produits</h2>
            <div className="divider divider-secondary"></div>
      </div>
    </div>
  
  )
}
