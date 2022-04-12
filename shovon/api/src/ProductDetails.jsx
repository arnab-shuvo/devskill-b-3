import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Products from "./ProductList";
import CustomLoaderEcomm from "./customLoader";

function ProductDetails({ productId }) {
  const [product, setProduct] = useState();
  const [EditProduct, setEditProduct] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      });
  }, [productId]);

  return (
    <div>
      {product ? (
        <Box pt={10} pl={10}>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <CardMedia
                style={{ height: "" }}
                component="img"
                image={product.image}
              />
            </Grid>
            <Grid item xs={6}>
              <h1>{product.title}</h1>
              <h3>Price: {product.price}</h3>
              <p>{product.description}</p>
            </Grid>
            <Grid item xs={3}>
              {product.category}
            </Grid>
          </Grid>
        </Box>
      ) : (
        // "Loading....."
        <CustomLoaderEcomm />
      )}
    </div>
  );
}
export default ProductDetails;
