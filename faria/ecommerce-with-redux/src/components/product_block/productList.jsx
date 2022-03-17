import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CustomLoaderEcomm from "../Loader/customLoader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductr } from "../../store/action/productAction";

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const { productr } = useSelector((store) => store.productr);
  console.log(productr, "=store products");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const productDetails = (id) => {
    navigate(`/product-details/${id}`);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        dispatch(setProductr(json));
        console.log(productr, "=store products");
      });
  }, []);

  return (
    <div className="container mt-5">
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        sx={{
          mx: "auto",
          textAlign: "center",
          fontSize: "35px",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        Product List
      </Typography>

      {products ? (
        <div>
          <Container sx={{ mx: "auto" }}>
            <Grid sx={{ mx: "auto" }} wrap="wrap" container rowSpacing={1}>
              <Grid
                sx={{ mx: "auto", justifyContent: "center" }}
                item
                mx-auto
                container
              >
                {products.map((product) => (
                  <Grid m={2} md={3} item>
                    <Card sx={{ maxWidth: 300, height: "100%" }}>
                      <CardActionArea>
                        <CardMedia
                          style={{ objectFit: "contain" }}
                          objectFit="contain"
                          component="img"
                          height="140"
                          image={product.image}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                          </Typography>
                          <Typography
                            sx={{ color: "info.main" }}
                            variant="subtitle1"
                          >
                            <p>
                              <b>price:{product.price}</b>
                            </p>
                          </Typography>
                          <Typography
                            mb={1}
                            variant="body2"
                            color="text.secondary"
                          >
                            {product.category}
                          </Typography>

                          <Button
                            mt={1}
                            onClick={() => productDetails(product.id)}
                            variant="outlined"
                          >
                            view
                          </Button>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : (
        <CustomLoaderEcomm />
      )}
    </div>
  );
};

export default ProductList;
