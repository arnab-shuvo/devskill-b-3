import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Index';

function SingleProduct() {
  
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState('')
  const [loader, setLoader] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    setLoader(true)
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then( (res)=> res.json())
    .then( (data)=> setSingleProduct(data))
    setLoader(false)
  }, [id])
  
  const backToProduct = () => {
    navigate('/products')
  }
  return (
    <>
    {loader? <Loader/>: 
        <Grid container marginY={5}>
        <Grid item xs={ 12 }> 
            <Card>
              
              <CardMedia
                component='img'
                src={singleProduct.image}
                width='100%'
                height='auto'
              />
              <CardContent>
                <Typography align='center' variant='h3' my={3}> { singleProduct?.title } </Typography>
                <Typography align='justify' variant='body1' my={ 3 }> { singleProduct?.description } </Typography>
                <Typography align='justify' variant='body1' my={ 2 }> Price: { singleProduct?.price } </Typography>
                <Typography align='justify' variant='body1' my={ 2 }> Category : { singleProduct?.category } </Typography>
              </CardContent>
              <CardActions>
                <Button variant='contained' onClick={backToProduct}>  Back to Product </Button>
              </CardActions>
            </Card>
        </Grid>
      </Grid>
    }
    </>
  )
}

export default SingleProduct