import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import CustomLoader from "./components/CustomLoader";
import ProductListComp from "./components/productListComp";
import ProductDetailsPage from "./components/productDetailsComp";
import FilterProduct from "./components/filter-product";
import ProductPageHeader from "./pages/Navigation/header";
function App() {
  const [showProducts, setShowProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const filterProduct = (result) => {
    console.log("this is filter product");
    console.log(result);
    setShowProducts(result);
  };

  const viewElement = (id) => {
    setShowLoader(true);
    setTimeout(() => {
      setSelectedProduct(id);
      setShowLoader(false);
    }, 500);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setShowProducts(json);
      });
  }, []);


  return (
    <>
    <ProductPageHeader />
      {showLoader && <CustomLoader />}
      <FilterProduct setProducts={filterProduct} />
      {selectedProduct === null ? (
        <ProductListComp
          showProducts={showProducts}
          showProductList={viewElement}
        />
      ) : (
        <ProductDetailsPage
          productId={selectedProduct.id}
          showProductDetails={viewElement}
        />
      )}
    </>
  );
}

export default App;
