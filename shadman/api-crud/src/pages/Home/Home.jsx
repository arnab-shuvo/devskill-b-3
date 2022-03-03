import React, { useState, useEffect } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductList from "../../components/ProductList/ProductList";
import Dropdown from "../../components/Dropdown/Dropdown";

const Home = () => {
  const [flag, setFlag] = useState(true);
  const [productDetailID, setProductDetailID] = useState(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductList(json);
      });
  }, []);

  const getProductID = (id) => {
    setFlag(false);
    setProductDetailID(id);
  };

  return (
    <>
      {flag ? (
        <>
          <Dropdown setProductList={setProductList}/>
          <ProductList getProductID={getProductID} productList={productList} />
        </>
      ) : (
        <>
          <ProductDetail productDetailID={productDetailID} setFlag={setFlag} />
        </>
      )}
    </>
  );
};

export default Home;
