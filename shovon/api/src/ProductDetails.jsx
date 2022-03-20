import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Products from "./ProductList";

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
        "Loading....."
      )}
    </div>
  );
}
export default ProductDetails;
