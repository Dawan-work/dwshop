import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_URL = `http://localhost:3000/products/${id}`;

  const fetchPost = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(API_URL); // pause
      setProduct(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if(isLoading) {
    return <p>Chragement en cours</p>
  }

  if(error) {
    return <p>{error}</p>
  }

  return <div>{product.title}</div>;
};
