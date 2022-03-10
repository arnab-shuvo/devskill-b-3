import React, { useState, useEffect } from 'react';
import EditProductPage from '../product-functions/editProduct';
import ProductDetails from "./productDetails";
import ProductList from "./productList";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FilterProduct from '../product-functions/filter-product';

const Product = () => {
  const [showCreateProduct, setShowCreateProduct] = useState(false);
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
      <div>
      <FilterProduct setProducts={filterProduct} />

        {selectedProduct === null ? (
          <ProductList
            showProducts={showProducts}
            showProductList={viewElement}
          />
        ) : (<>
        <ProductDetails
            productId={selectedProduct.id}
            showProductDetails={viewElement}
          />
          <EditProductPage editProductList={viewElement}/>
        </>
          
        )}
       
      </div>
    </>
  );
};

export default Product;
