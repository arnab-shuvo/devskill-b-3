import React, { useEffect, useState } from 'react'
import {Grid, Card, CardHeader, Avatar, IconButton, MoreVertIcon, CardMedia, CardContent, ExpandMoreIcon, Typography, CardActions, FavoriteIcon, ShareIcon } from '@material-ui/core'
import { Button } from '@material-ui/core';


export default function ProductList({detailsHandler}) {

  const [products, setProducts] = useState([]);

   useEffect(() => {
     async function fetchData(){
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
     }
    
     fetchData()

   }, [])

  return (
    <div>
        <h1>Product List</h1>
        <Grid container spacing={2}>
        {products.map((product, ind) => (
            
              <Grid key= {product.id} item xs={2}>
              <Button onClick={ () => detailsHandler(product.id)}>
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                  component="img"
                  height="194"
                  image={product.image}
                  alt="Paella dish"
                />
                <CardHeader
                  title={product.title}
                  subheader="September 14, 2016"
                />
                
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                  </IconButton>
                  <IconButton aria-label="share">
                  </IconButton>
                  
                </CardActions>
              </Card>
              </Button>
              </Grid>
            
        ))}
        </Grid>
    </div>
  )
}
