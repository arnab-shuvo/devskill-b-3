import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Container } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import {
  getselectedProduct
} from "../../redux/action/productAction";

const Product = () => {
  const { product } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      dispatch(getselectedProduct(id));
      setLoading(false);
    };

    getProduct();
  }, [id, dispatch]);

  const deleteProduct = async () => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  const Loading = () => {
    return (
      <div>
        <Grid container>
          <Grid md={4} item>
            <Skeleton variant="rectangular" width={400} height={400} />
          </Grid>
          <Grid md={1} item></Grid>
          <Grid md={7} item>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={400} height={40} />
              <Skeleton
                variant="rectangular"
                width={(400 * 12) / 7}
                height={114}
              />
              <Skeleton variant="rectangular" width={200} height={50} />
              <Skeleton variant="rectangular" width={100} height={50} />
              <Skeleton
                variant="rectangular"
                width={(400 * 12) / 7}
                height={114}
              />
            </Stack>
          </Grid>
        </Grid>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <div>
        <Grid container>
          <Card sx={{ display: "flex" }}>
            <Grid item md={4}>
              <CardMedia
                component="img"
                sx={{ height: 400, width: 400 }}
                image={product?.image}
                alt="Live from space album cover"
              />
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item md={7}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {product?.title[0]}
                    </Avatar>
                  }
                  title={product?.title}
                  subheader={product?.category}
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {product?.description}
                  </Typography>
                  <Typography variant="h4" color="text.secondary">
                    Price: {product?.price}
                  </Typography>
                  {product?.rating.rate ? (
                    <Rating value={product.rating.rate} />
                  ) : null}
                </CardContent>
                <Box>
                  <CardActions>
                    <Link
                      to={`/products`}
                      style={{ textDecoration: "none", margin: "4px" }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          color: "black",
                          display: "block",
                          border: "2px black solid",
                        }}
                      >
                        View All Products
                      </Button>
                    </Link>
                    <Link
                      to={`/products/${id}`}
                      style={{ textDecoration: "none", margin: "4px" }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          color: "black",
                          display: "block",
                          border: "2px black solid",
                        }}
                      >
                        Add to Cart
                      </Button>
                    </Link>
                    <Link
                      to={`/update-product/${id}`}
                      style={{ textDecoration: "none", margin: "4px" }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          color: "black",
                          display: "block",
                          border: "2px black solid",
                        }}
                      >
                        Update Product
                      </Button>
                    </Link>
                    <Link
                      to={`/products`}
                      style={{ textDecoration: "none", margin: "4px" }}
                    >
                      <Button
                        onClick={deleteProduct}
                        variant="outlined"
                        sx={{
                          color: "black",
                          display: "block",
                          border: "2px black solid",
                        }}
                      >
                        Delete Product
                      </Button>
                    </Link>
                  </CardActions>
                </Box>
              </Box>
            </Grid>
          </Card>
        </Grid>
      </div>
    );
  };

  return (
    <div>
      <Container sx={{ mt: 2 }}>
        {Object.keys(product).length === 0 ? <Loading /> : <ShowProduct />}
      </Container>
    </div>
  );
};

export default Product;
