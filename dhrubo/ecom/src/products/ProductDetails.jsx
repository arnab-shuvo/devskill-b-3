import { Box, Button, ButtonBase, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react'
import EditProducts from './EditProducts';

export default function ProductDetails({productId}) {
      const [product, setProduct] = useState(); 
        const [EditProduct, setEditProduct] = useState(false);

      const EditModal = () => {
        if(product !== null){
          setEditProduct(true);
        }
        };

        const onClose = (id) => {
            setEditProduct(id);
        }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then((result) => {
            setProduct(result); 
        }) ; 
        
    },[productId])

  return (
      
    <div>
        
        { product ? (
        <Box pt={10} pl={10}>
            <Button variant="outlined" onClick={EditModal}>
              Edit Product
            </Button>
            <div>
            {EditProduct && <EditProducts product={product} onClose={onClose}/>}
            </div>
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
                
                <h3>
                    
                <Rating name="half-rating" defaultValue={product.rating.rate} precision={0.5} />
                </h3>
            </Grid>
            <Grid item xs={3}>{product.category}</Grid>
        </Grid>
        </Box> ) : 
        (
            "Loading"
            )}
    </div>
  )
}
