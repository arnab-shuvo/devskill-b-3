import React, { useEffect, useState } from 'react'
import {Grid, Card, CardHeader, Avatar, IconButton, MoreVertIcon, CardMedia, CardContent, ExpandMoreIcon, Typography, CardActions, FavoriteIcon, ShareIcon, Menu, MenuItem } from '@material-ui/core'
import { Button } from '@material-ui/core';
import AddProduct from './AddProduct';
import { Rating } from '@mui/material';
import FilterProducts from './FilterProducts';


export default function ProductList({detailsHandler}) {
  
  const [allProducts, setAllProducts] = useState([]); 

  const [products, setProducts] = useState([]);
  const[addProduct, setAddProduct] = useState(false); 

   useEffect(() => {
     async function fetchData(){
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setAllProducts(data); 
    setProducts(data);
     }
    
     fetchData()

   }, [])

   const handleClickOpen = () => {
    setAddProduct(true);
  };

  const childToParent = (childdata) => {
    setAddProduct(childdata);
  }


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
        
        <Grid container spacing={2}>
          <Grid container>
              <Grid item xs={12} ><h1>Product List</h1></Grid>
              <Grid item xs={12} > 
              <Button variant="outlined" onClick={handleClickOpen}>
              Add Product
              </Button>
              </Grid>
              <Grid>
                <FilterProducts filterHandle={filterHandle} sortCategory={sortCategory}/>
              </Grid>
          </Grid>
          
          <div>
          {addProduct && <AddProduct AddProduct childToParent={childToParent} />}
          </div>
          
            {products ?
            
              <>
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
                subheader={'Price:' + product.price}
              />
              <Rating name="half-rating" defaultValue={product.rating.rate} precision={0.5} />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
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
    </div>
  )
}
