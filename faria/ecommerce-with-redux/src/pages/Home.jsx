import React, { useEffect, useState } from "react";
import ProductList from "../components/product_block/productList";
// import Product from "../components/product-block/product";
// import ProductDetails from "../components/product-block/productDetails";
// import CreateProduct from "../components/product_block/createProduct";
import ProductPageHeader from "./Header";

const Home = () => {

  return (
    <>
      <ProductPageHeader />
      <ProductList/>
    </>
  );
};

export default Home;
