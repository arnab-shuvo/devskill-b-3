import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';


function ProductList({ products }) {
  
  const deleteProduct = (id) => {
    const newId = id;
    
    fetch(`https://fakestoreapi.com/products/${newId}`,{
        method:"DELETE"
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
}


  return (
    <Grid container spacing={ 2}>
        {
          products.map((product) =>
          <Grid item xs={6} sm={3} md={4} key={product.id}>
          <Card>
            <CardMedia
                  component='img'
                  width='100%'
                  height='300px'
                  src={product.image}
            />
            <CardContent>
                  <Typography noWrap variant='h6'> {product.title } </Typography>
                  <Typography noWrap variant='body1'> {product.description } </Typography>
                  <Typography noWrap variant='body2'> Category : {product.category } </Typography>
            </CardContent>
                <CardActions>
                  <NavLink to={`${product.id}`}>
                    <Button variant='contained'> Details  {product.id} </Button>
                  </NavLink>
                  <NavLink to={`${product.id}/edit`}>
                    <Button variant='contained' > Edit </Button>
                  </NavLink>
                  <Button variant='contained' onClick={ ()=> deleteProduct(product.id)}> Delete </Button>
            </CardActions>
          </Card>
        </Grid>
          )
        }
      </Grid>
  )
}

export default ProductList