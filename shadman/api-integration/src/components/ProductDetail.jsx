import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
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
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';


const ProductDetails = ({ productDetail, setFlag }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productDetail}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      });
  }, [productDetail]);

  return (
    <div>
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
            <h2>{product.category}</h2>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
            <Button variant="contained" onClick = {()=>setFlag(true)}>
              View All Products
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ProductDetails;
