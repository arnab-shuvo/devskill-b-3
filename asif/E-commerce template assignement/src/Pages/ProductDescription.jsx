import { Button } from "@material-ui/core";
import React from "react";

const ProductDescription = ({ product, clearProduct }) => {
  return (
    <div className="product-page">
      <Button onClick={clearProduct}>Back To Home</Button>
      <div className="product">
        <h2>{product.title}</h2>
        <div className="product-image-wrapper">
          <img alt={product.title} src={product.image} />
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <p>{product.category}</p>
          <p>price : {product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
