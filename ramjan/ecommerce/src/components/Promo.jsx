import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';


const styles = {
    promoLeft: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    img: {
        width: '100%',
        height: 'auto',
        backgroundSize: 'cover',
    },
    buttonColor: {
        color: '#fff',
        backgroundColor: '#000000'
    },
    promoDiv: {
        border: '1px solid #cccccc',
        boxShadow: '1px 1px 2px #888888',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    promoCenter: {
        backgroundColor: '#000000',
        width: '100%',
        height: '50%',
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    promoCenterBottom: {
        backgroundColor: '#cccccc',
        width: '100%',
        height: '50%',
        color: '#fff',
        textAlign: 'center'
    },
    marginHorizontal : {
        marginTop: '10px',
        marginBottom: '50px',
    }
}

const products = [

    {
        id: 1,
        title: 'Jacket',
        price: 220,
        image :'../images/f1.jpg'
    },
    {
        id: 2,
        title: 'Cloth',
        price: 240,
        image :'/images/f2.jpg'
    },
    {
        id: 3,
        title: 'Coat',
        price: 260,
        image :'/images/f3.jpg'
    },
]

function Promo() {
  return (
      <>
          <Grid container>
              <Grid xs={12} sm={12} md={12}>
                <Typography variant='h6'> Trending Items</Typography>
              </Grid>
          </Grid>
      <Grid container spacing={2} style={styles.marginHorizontal}>
        {/* Mapping shoul Go here */}

        {
            products.map((product, index) =>
            <Grid item xs={12} sm={4} md={4}>
            <Card >
                <CardContent>
                    <CardMedia
                        component='img'
                        src={product.image}
                        width='100%'
                        height='auto'
                    />
                    <Typography variant="h5" color="text.secondary">
                              {product.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                              {product.price} 
                    </Typography>
                        <Button style={styles.buttonColor} variant='contained'> Shop Now </Button>
                    </CardContent>
                </Card>
              </Grid> 
            )          
        }   

        {/* mapping end    */}

              
          </Grid>
        </>
  )
}

export default Promo