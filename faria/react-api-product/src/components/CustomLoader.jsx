import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./src/App.css";
// import ProductListComp from "./components/productListComp";
// import ProductDetailsPage from "./components/productDetailsComp";

const CustomLoader = ({ showProductDetails, selectedProduct }) => {
  return (
    <div className="mx-auto w-100w-full">
      <div className="spinner-box">
        <div className="three-quarter-spinner"></div>
      </div>
    </div>
  );
};

export default CustomLoader;
