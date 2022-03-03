import React from "react";
import "./productDescription.css";
const ProductDescription = ({ onPageChange, product }) => {
  return (
    <div className="product-description-page">
      <div className="back-button-container">
        <button onClick={() => onPageChange("home")} className="back-button">
          BACK TO HOME
        </button>
      </div>
      <div className="product-description-container">
        <div className="left">
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <div className="product-description-image">
            <img alt={product.title} src={product.image} />
          </div>
        </div>
        <div className="right">
          <div>
            <h4>Description</h4>
            <p>{product.description}</p>
          </div>
          <div className="action">
            <p>price : {product.price}</p>
            <button>Add to cart!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
