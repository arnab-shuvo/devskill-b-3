import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
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
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import { ProductionQuantityLimitsTwoTone } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";

function ProductList({ detailsHandler }) {
  const [productList, setProductList] = useState([]);
  const [productDetail, setProductDetail] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductList(json);
      });
  }, []);

  // const getDetail = (id) => {
  //   fetch(`https://fakestoreapi.com/products/${id}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setProductDetail(json);
  //     });
  // };
  return (
    <Grid container justifyContent={"center"}>
      <Grid item container md={10} spacing={2}>
        {productList.map((product) => {
          return (
            <Grid md={3} item onClick={() => detailsHandler(product.id)}>
              <Card sx={{ maxWidth: 300, height: "100%" }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {product.title[0]}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={product.title}
                  subheader={product.category}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={product.image}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
export default ProductList;
