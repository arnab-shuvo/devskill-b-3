import React, { useState } from "react";
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
import ProductDetails from "./ProductDetail";
import ProductList from "./ProductList";

const Home = ({ productList, setProductList }) => {
  const [flag, setFlag] = useState(true);
  const [productDetail, setProductDetail] = useState(null);

  const getDetail = (id) => {
    setFlag(false)
    setProductDetail(id)
  }
    
  return (
    <>
      {flag ? (
        <ProductList getDetail={getDetail} />
      ) : (
        <ProductDetails productDetail={productDetail} setFlag={setFlag}/>
      )}
    </>
  );
};

export default Home;
