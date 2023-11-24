import React, { useEffect, useState } from 'react'
import ProductListFilters from '../components/ProductListFilter';
import axios from 'axios';
import { X } from 'react-feather';

export const Products = () => {
     // V1 SANS FILTRAGE PAR API (FILTRE EN FRONT) ET PAS DE PAGINATION
   
    const BASE_URL_API = 'http://localhost:3000/products';

     const [products, setProducts] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(null);


     //filteredProducts est une copie de products
     const [filteredProducts, setFilteredProducts] = useState([]);
     const [search, setSearch] = useState('');
     const [category, setCategory] = useState('Tout');

    // fetch api
     const fetchProducts = async () => {
        setIsLoading(true);
         try {
             const { data } = await axios.get(BASE_URL_API);
             setProducts(data);
             setFilteredProducts(data);
         } catch (error) {
             setError(error.message || "Une erreur est survenue");
         } finally {
            setIsLoading(false);
         }
          };

    // reset filter
     const reset = () => {
         setCategory('Tout');
         setSearch('');
     };

    // chargement des produits au chargement de la page
    useEffect(() => {
        fetchProducts();
     }, []);


    // filtrage des produits en fonction de la recherche et de la catégorie
    useEffect(() => {
        let newProducts = [...products];
        // filtrage par catégorie
        if (category !== 'Tout') {
            newProducts = newProducts.filter((product) => product.category === category);
        }
        // filtrage par recherche
        if (search) {
            newProducts = newProducts.filter(
                (product) =>
                    product.title.toLowerCase().includes(search.toLowerCase()) ||
                    product.description.toLowerCase().includes(search.toLowerCase()) 
            );
        }
        setFilteredProducts(newProducts);

    } , [search, category]);

  return (
    <main className='my-10 container mx-auto'>
    {/* FORM */}
    <form>
        <fieldset  className="  border-4 my-4 flex md:flex-row flex-col justify-center gap-2 bg-neutral py-6 px-4 rounded-xl shadow-xl shadow-neutral">
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input input-bordered flex-grow"
                type='text'
                placeholder="Que recherchez-vous ?"
            />
            <select
                className="select select-bordered"
                name="cat"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id="cat"
            >
                <option value="Tout">Tout</option>
                <option value="Souris">Souris</option>
                <option value="Jeux video">Jeux video</option>
                <option value="Ordinateur">Ordinateur</option>
                <option value="VR">VR</option>
                <option value="Casque">Casque</option>
                <option value="Ecran">Ecran</option>
                <option value="Clavier">Clavier</option>
                <option value="Accessoire">Accessoire</option>
                <option value="Smartphone">Smartphone</option>
                <option value="Montre connectée">Montre connectée</option>
            </select>

            {(search.length > 1 || category !== "Tout") && (
                <button
                    role={"button"}
                    onClick={reset}
                    className="hover:bg-base-100 p-2 rounded-full hover:text-secondary hover:scale-105"
                >
                    <X />
                </button>
            )}
        </fieldset>

    </form>

     <ProductListFilters
        products={filteredProducts}
        loading={isLoading}
        error={error} /> 
    
</main>
  )
}

