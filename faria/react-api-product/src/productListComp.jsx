import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { maxHeight } from "@mui/system";

const ProductListComp = ({ showProducts, showProductList }) => {
  // const myLists = showProducts.myLists;

  return (
    <div className="container mt-5">
      <h1 className="text-center">Product List</h1>
      <div>
        <Container sx={{ mx: "auto" }}>
          <Grid sx={{ mx: "auto" }} wrap="wrap" container rowSpacing={1}>
            <Grid
              sx={{ mx: "auto", justifyContent: "center" }}
              item
              mx-auto
              container
            >
              {showProducts.map((showProduct) => (
                <Grid m={2} md={3} item>
                  <Card sx={{ maxWidth: 300, height: "100%" }}>
                    <CardActionArea>
                      <CardMedia
                        style={{ objectFit: "contain" }}
                        objectFit="contain"
                        component="img"
                        height="140"
                        image={showProduct.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {showProduct.title}
                        </Typography>
                        <Typography
                          sx={{ color: "info.main" }}
                          variant="subtitle1"
                        >
                          <p>
                            <b>price:{showProduct.price}</b>
                          </p>
                        </Typography>
                        <Typography
                          mb={1}
                          variant="body2"
                          color="text.secondary"
                        >
                          {showProduct.category}
                        </Typography>

                        <Button
                          mt={1}
                          onClick={() => showProductList(showProduct)}
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
    </div>
  );
};

export default ProductListComp;
