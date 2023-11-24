import React, { useEffect, useState } from "react";
import ProductListFilters from "../components/ProductListFilter";
import axios from "axios";
import { ArrowLeft, ArrowRight, X } from "react-feather";
import Pagination from "rc-pagination";
import { debounce } from "lodash";
import { useDebounce } from "../hooks/useDebounce";

export const Products = () => {
  //  // V1 SANS FILTRAGE PAR API (FILTRE EN FRONT) ET PAS DE PAGINATION

  // const BASE_URL_API = 'http://localhost:3000/products';

  //  const [products, setProducts] = useState([]);
  //  const [isLoading, setIsLoading] = useState(false);
  //  const [error, setError] = useState(null);

  //  //filteredProducts est une copie de products
  //  const [filteredProducts, setFilteredProducts] = useState([]);
  //  const [search, setSearch] = useState('');
  //  const [category, setCategory] = useState('Tout');

  // // fetch api
  //  const fetchProducts = async () => {
  //     setIsLoading(true);
  //      try {
  //          const { data } = await axios.get(BASE_URL_API);
  //          setProducts(data);
  //          setFilteredProducts(data);
  //      } catch (error) {
  //          setError(error.message || "Une erreur est survenue");
  //      } finally {
  //         setIsLoading(false);
  //      }
  //       };

  // // reset filter
  //  const reset = () => {
  //      setCategory('Tout');
  //      setSearch('');
  //  };

  // // chargement des produits au chargement de la page
  // useEffect(() => {
  //     fetchProducts();
  //  }, []);

  // // filtrage des produits en fonction de la recherche et de la catégorie
  // useEffect(() => {
  //     let newProducts = [...products];
  //     // filtrage par catégorie
  //     if (category !== 'Tout') {
  //         newProducts = newProducts.filter((product) => product.category === category);
  //     }
  //     // filtrage par recherche
  //     if (search) {
  //         newProducts = newProducts.filter(
  //             (product) =>
  //                 product.title.toLowerCase().includes(search.toLowerCase()) ||
  //                 product.description.toLowerCase().includes(search.toLowerCase())
  //         );
  //     }
  //     setFilteredProducts(newProducts);

  // } , [search, category]);

  // V2 / FILTRAGE API + PAGINATION
  const BASE_URL_API = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [totalItems, setTotalItems] = useState(0);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tout");

  // fetch api
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const { data, headers } = await axios.get(BASE_URL_API, {
        params: {
          _page: currentPage,
          _limit: itemsPerPage,
          title_like: search,
          description_like: search,
          category: category != "Tout" ? category : undefined,
        },
      });
      setProducts(data);
      setTotalItems(headers["x-total-count"])
    } catch (error) {
      setError(error.message || "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  // reset filter
  const reset = () => {
    setCategory("Tout");
    setSearch("");
  };

  // handle page
  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum)
  }

  const debouncedSearch = useDebounce(search, 500)

    useEffect(() => {
    if(debouncedSearch) {
        fetchProducts();
    } 
  }, [debouncedSearch]);

  useEffect(() => {
      fetchProducts()
  }, [category, itemsPerPage, currentPage])


  
  // Debounce 
//   const debouncedFetchProducts = debounce(fetchProducts, 500)
  
//   // chargement des produits au chargement de la page
//   useEffect(() => {
//     if(search) {
//         debouncedFetchProducts();
//     } 
//     // cleanup
//     return () => {
//         debouncedFetchProducts.cancel()
//     }

//   }, [search]);


//   // DEBOUNCE 
//   function myDebounce(fn, wait) {
//      let timerId;
//      return function(...args) {
//         if(timerId) {
//             console.log("Methode annulé")
//             clearTimeout(timerId)
//         }
//         timerId = setTimeout(() => {
//             fn(...args)
//             timerId = null
//         }, wait);

//      }
//   }

//   function sayHello (name) {
//     console.log("Hello " + name)
//   }

//   const debouncedSayHello = myDebounce(sayHello, 1000)
//   debouncedSayHello("Vegeta")
//   debouncedSayHello("Goku")
//   debouncedSayHello("Freezer")
//   debouncedSayHello("Piccolo")
//   debouncedSayHello("Hercule")
//   debouncedSayHello("Buu")




  return (
    <main className="my-10 container mx-auto">
      {/* FORM */}
      <form>
        <fieldset className="  border-4 my-4 flex md:flex-row flex-col justify-center gap-2 bg-neutral py-6 px-4 rounded-xl shadow-xl shadow-neutral">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered flex-grow"
            type="text"
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

          <select
            className="select select-bordered"
            name="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(e.target.value)}
            id="itemsPerPage"
          >
            <option value="8">8</option>
            <option value="24">24</option>
            <option value="50">50</option>
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
        products={products}
        loading={isLoading}
        error={error}
      />

      <div className="flex justify-center my-10">
        <Pagination 
          current={currentPage}
          total={totalItems}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
          prevIcon={<ArrowLeft />}
          nextIcon={<ArrowRight />}
        />
      </div>
    </main>
  );
};
