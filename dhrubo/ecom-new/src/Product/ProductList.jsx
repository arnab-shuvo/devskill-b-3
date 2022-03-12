import React, { useEffect, useState } from 'react'
import {Grid, Card, CardHeader, Avatar, IconButton, MoreVertIcon, CardMedia, CardContent, ExpandMoreIcon, Typography, CardActions, FavoriteIcon, ShareIcon, Menu, MenuItem, Container } from '@material-ui/core'
import { Button } from '@material-ui/core';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ProductList({detailsHandler}) {
  
  const [allProducts, setAllProducts] = useState([]); 

  const [products, setProducts] = useState([]);

   useEffect(() => {
     async function fetchData(){
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setAllProducts(data); 
    setProducts(data);
     }
    
     fetchData()

   }, [])


  const filterHandle = (id) => {
    
    setProducts(allProducts);
    var newProducts =  allProducts.filter(function(products) {
      return products.category === id;
    });
    setProducts(null);
    setProducts(newProducts);
    console.log(newProducts); 
  }

  const sortCategory = (id)=> {
    
   const sortproducts = allProducts.sort((a,b) => a.price - b.price); 
   console.log(sortproducts); 
    setProducts(null); 
    setProducts(sortproducts);
  }

 

  return (
    <div>
        <Container>
        <Grid container spacing={2}>
          <Grid container>
              <Grid item xs={12} ><h1>Product List</h1></Grid>
              <Grid item xs={12} > 
                <Link to="/addproduct">
                <Button variant="outlined">
                Add Product
                </Button>
                </Link>
              </Grid>
              <Grid>
              </Grid>
          </Grid>
          
          
          
            {products ?
            
              <>
              {products.map((product, ind) => (
            
            <Grid key= {product.id} item xs={3}>
            <Button onClick={ () => detailsHandler(product.id)}>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="194"
                image={product.image}
                alt="Paella dish"
              />
              <CardHeader
                title={product.title.slice(0,10)}
                subheader={'Price:' + product.price}
              />
              <Rating name="half-rating" defaultValue={product.rating.rate} precision={0.5} />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {product.description.slice(0,25)}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                </IconButton>
                <IconButton aria-label="share">
                </IconButton>
                <h4>{'Category:' + product.category}</h4>
              </CardActions>
            </Card>
            </Button>
            </Grid>
        ))}
              </> : "Loading"
            }
            
        </Grid>
        </Container>
        
    </div>
  )
}
