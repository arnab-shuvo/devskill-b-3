import { Box, ButtonBase, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function ProductDetails({productId}) {
      const [product, setProduct] = useState([]); 

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then((result) => {
            setProduct(result); 
        }) ; 
        
    },[productId])

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
            {console.log(product)}
                <h1>{product.title}</h1>
                <h3>Price: {product.price}</h3>
                <p>{product.description}</p>
                
                <h3>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </h3>
            </Grid>
            <Grid item xs={3}>{product.category}</Grid>
        </Grid>
        </Box>
    </div>
  )
}
