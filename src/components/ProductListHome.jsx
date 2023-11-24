import axios from "axios";
import React, { useEffect, useState } from "react";
import { ErrorLayout } from "./ErrorLayout";
import { ProductCard } from "./ProductCard";
import SkeletonCards from "./SkeletonCards";

export const ProductListHome = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_URL = "http://localhost:3000/products?_page=1&_limit=4";

  // ES8 : async await
  const fetchPosts2 = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(API_URL); // pause
      setProducts(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts2();
  }, []);

  if (error) {
    return (
      <ErrorLayout error={error} />
    );
  }

  
  if (isLoading) {
    return (
      <SkeletonCards size={4} />
    );
  }
  
  return (
    <div className="my-10 flex gap-10 flex-col justify-center md:grid md:grid-cols-2 lg:grid-cols-4">
    {products.map((p) => (
        <ProductCard product={p} key={p.id} />
      ))}
    </div>
  );
};
