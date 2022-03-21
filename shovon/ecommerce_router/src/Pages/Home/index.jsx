import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { red } from "@mui/material/colors";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const toDetail = (id) => {
    navigate(`/product-detail/${id}`);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <Grid container justifyContent={"center"}>
        <Grid item container md={10} spacing={2}>
          {products.map((product) => {
            return (
              <Grid md={3} item onClick={() => toDetail(product.id)}>
                <Card sx={{ maxWidth: 300, height: "100%" }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {product.title[0]}
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        {/* <MoreVertIcon /> */}
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
                <button onClick={() => toDetail(product.id)}></button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default Home;
