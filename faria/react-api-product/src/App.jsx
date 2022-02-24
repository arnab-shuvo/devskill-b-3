import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import CustomLoader from "./CustomLoader";
import ProductListComp from "./productListComp";
import ProductDetailsPage from "./productDetailsComp";

function App() {
  const [showProducts, setShowProducts] = useState([]);


  // return (
  //   <div>
      
  //   </div>
  // );
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  // const [showElements, setShowElements] = useState(true);
  // const [showProducts, setShowProducts] = useState([
  //   {
  //     name: "Wiper",
  //     description: "lorem ipsum doler wiper",
  //     price: "12",
  //     category: "Product Category wiper",
  //   },
  //   {
  //     name: "Tissue",
  //     description: "lorem ipsum doler tissue",
  //     price: "23",
  //     category: "Product Category tissue",
  //   },
  //   {
  //     name: "bucket",
  //     description: "lorem ipsum doler bucket",
  //     price: "33",
  //     category: "Product Category bucket",
  //   },
  // ]);

  // const name="testing";
  const viewElement = (showProduct) => {
    // console.log(showProduct);
    // console.log(selectedProduct);
    // setShowElements(false);
    // alert("working");
    setShowLoader(true);
    setTimeout(() => {
      setSelectedProduct(showProduct);
      setShowLoader(false);
    }, 500);
  };
 useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {setShowProducts(json);});
  }, []);
  return (
    <>
      {showLoader && <CustomLoader />}
      {selectedProduct === null ? (
        <ProductListComp
          showProducts={showProducts}
          showProductList={viewElement}
        />
      ) : (
        <ProductDetailsPage
          selectedProduct={selectedProduct}
          showProductDetails={viewElement}
        />
      )}
    </>
  );
}

export default App;
