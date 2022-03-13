import React, { useEffect, useState } from "react";
import Product from "../components/product-block/product";
import ProductDetails from "../components/product-block/productDetails";
import ProductList from "../components/product-block/productList";
import CreateProduct from "../components/product-functions/createProduct";
import ProductPageHeader from "./Header";

const Home = () => {
  const [showProducts, setShowProducts] = useState([]);
  const [showCreateProduct, setShowCreateProduct] = useState(false);

  // const filterProduct = (result) => {
  //   console.log("this is filter product");
  //   console.log(result);
  //   setShowProducts(result);
  // };

  return (
    <>
      <div>
        <ProductPageHeader
          onClickPage={() => setShowCreateProduct(!showCreateProduct)}
        />
        {!showCreateProduct && <Product />}
        {showCreateProduct && <CreateProduct />}
      </div>
    </>
  );
};

export default Home;
