import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Container } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const ProductList = ({ getProductID, productList }) => {


  return (
    <Container>
      <Grid container justifyContent={"center"}  >
        <Grid item container md={12} spacing={3}>
          {productList.map((product) => {
            return (
              <Grid md={3} item >
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {product.title[0]}
                      </Avatar>
                    }

                    title={`${product.title.slice(0, 15)}.....`}
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
                      {product.description.substr(0, 50)}.....
                    </Typography>
                  </CardContent>
                  <CardActions >
                    <Button  onClick={() => getProductID(product.id)}>View Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container >
  )
}

export default ProductList