import React from "react";
import Grid from "@mui/material/Grid";
import "./product.css";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <Grid
      item
      xs={10}
      sm={6}
      md={4}
      lg={3}
      marginX="auto"
      className="product-item"
      component={Link}
      to={`/product-details/${product.id}`}
    >
      <div className="product-image-container">
        <img alt={product.name} src={product.image} className="product-image" />
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p>{product.description.slice(0, 30)}...</p>
    </Grid>
  );
};

export default Product;
