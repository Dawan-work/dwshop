import {ProductCard} from "./ProductCard.jsx";
import { Skeleton } from "./Skeleton.jsx";
const ProductListFilters = ({products, loading, error}) => {


    if(loading) {
        return (
            <div className="my-10 flex gap-10 flex-col justify-center md:grid md:grid-cols-2 lg:grid-cols-4">
                {[...Array(20)].map((_, index) => (
                    <Skeleton key={index} />
                ))}
            </div>
        )
    }

    if(!products.length && !loading) {
        return <p>Aucun résultat</p>
    }

    if (error) {
           return <p className="text-red-700 text-xl my-3 font-bold">Erreur : {error}</p>;
    }


    return (
    <>
        {/* PRODUITS */}
        <div className="my-10 flex gap-10 flex-col justify-center md:grid md:grid-cols-2 lg:grid-cols-4">
        {
         products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
        }
    </div>
    </>
    )

}

export default ProductListFilters