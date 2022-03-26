import React, { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import { useNavigate, useParams, useLocation } from "react-router-dom";
// import CustomLoaderEcomm from "./components/Loader/customLoader";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  // console.log(location, "==location");

  const toHome = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [id]);

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
          <Button onClick={() => toHome(product.id)}>Back</Button>
        </Box>
      ) : (
        "Loading....."
        // <CustomLoaderEcomm />
      )}
    </div>
  );
};
export default ProductDetail;
