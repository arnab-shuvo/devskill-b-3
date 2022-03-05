import { Card, CardContent, CardMedia } from "@material-ui/core";
import React from "react";
import "./product.css";
const Product = ({ product, onClickProduct, onPageChange, index }) => {
  return (
    <Card
      className="product"
      onClick={() => {
        onClickProduct({ data: product, index });
        onPageChange("product-description");
      }}
    >
      <div className="product-info">
        <h3>{product.title.substr(0, 15)}...</h3>
        <p>{product.category}</p>
      </div>
      <CardMedia image={product.image} style={{ paddingTop: "100%" }} />
      <CardContent>
        <p>{product.description.substr(0, 15)} ... </p>
        <p>{product.price}</p>
      </CardContent>
    </Card>
  );
};

export default Product;
