import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log(location, "==location");
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
      <p>ProductDetail</p>
      <button onClick={toHome}>Go to Home</button>
      <p>Product Name: {product?.title}</p>
      <p>Product Description: {product?.description}</p>
      <p>Product Price: {product?.price}</p>
      <p>Product category: {product?.category}</p>
    </>
  );
};
export default ProductDetail;
