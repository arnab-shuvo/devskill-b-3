import React, { useState } from "react";
import FilterProduct from "../../components/filter-product";
import ProductListComp from "../../components/productListComp";
import ProductDetailsPage from "../../components/productDetailsComp";
import CustomLoader from "../../components/CustomLoader";

const ProductHome = (showProducts, filterProduct) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const viewElement = (id) => {
    setShowLoader(true);
    setTimeout(() => {
      setSelectedProduct(id);
      setShowLoader(false);
    }, 500);
  };
  return (
    <>
      {/* {showLoader && <CustomLoader />}
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
      )} */}
    </>
  );
};

export default ProductHome;
