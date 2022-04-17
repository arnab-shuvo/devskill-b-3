import React from "react";
import Grid from "@mui/material/Grid";
import "./product.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
const Product = ({ index, product, on_product_delete }) => {
  const { token } = useSelector((store) => store.owner_reducer);
  const navigate = useNavigate();
  return (
    <Grid
      item
      xs={10}
      sm={6}
      md={4}
      lg={3}
      marginX="auto"
      className="product-item"
    >
      <div
        className="product-info"
        onClick={() => navigate(`/product-details/${product.id}`)}
      >
        <div className="product-image-container">
          <img
            alt={product.name}
            src={product.image}
            className="product-image"
          />
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p>{product.description.slice(0, 30)}...</p>
      </div>
      {token && (
        <div className="product-actions">
          <Button color="secondary" variant="contained" size="small">
            Edit
          </Button>
          <Button
            onClick={() => on_product_delete(product.id, index)}
            color="error"
            variant="contained"
            size="small"
          >
            Delete
          </Button>
        </div>
      )}
    </Grid>
  );
};

export default Product;
