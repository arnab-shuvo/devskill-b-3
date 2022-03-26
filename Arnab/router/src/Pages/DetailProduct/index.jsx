import React, { useEffect, useState } from "react";

import { useNavigate, useParams, useLocation } from "react-router-dom";

const DetailProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const toHome = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [id]);

  return (
    <>
      <p>DetailProduct</p>
      <button onClick={toHome}>Go To Home</button>
      <p>Product Name: {product?.title}</p>
      <p>Product Description: {product?.description}</p>
      <p>Product Price: {product?.price}</p>
      <p>Product Category: {product?.category}</p>
    </>
  );
};

export default DetailProduct;
