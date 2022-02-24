import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const styles = {
    img: {
        width: '100%',
        height: '200px',
        backgroundSize: 'cover',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    cardHeight: {
        height: '30vw'
    },
    marginHorizontal : {
        marginTop: '10px',
        marginBottom: '50px',
    }
}

function Products() {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const [productDetail, setProductDetails] = useState('')
    const [showProduct, setShowProduct ] =useState(true)
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
        .then( (data)=> setProducts(data))
    }, []);

    const getProductId = (id) => {
        setShowProduct(false)
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then( (res)=> res.json() )
        .then( (data)=> setProductDetails(data) )
    }

    const backToHome = () => {
        setShowProduct(true)
  }

   return (
       <>
           {
               showProduct ?

               <Grid container spacing={2} style={styles.marginHorizontal}>
               {
                   products.map((product, index) => {
                       return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card style={styles.cardHeight}>
                        <CardMedia
                            component='img'
                            height='100%'
                            image={product.image}
                            style={styles.img}
                        />
                        <CardContent>
                        <Typography variant='h6' noWrap> {product.title} </Typography>
                        <Typography variant='subtitle1'> Price : { product.price }$</Typography>
                        <Button
                            variant='contained'
                            onClick={()=>getProductId(product.id) }
                        > Shop Now
                        </Button>
                        </CardContent>
                   </Card>
                </Grid>
                      )
                  })
              }
                   </Grid> : 
                //    view details
                   <Grid container >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Card>
                            <CardMedia
                                component='img'
                                height='100%'
                                image={productDetail.image}
                                style={styles.img}
                            />
                            <CardContent>
                            <Typography variant='h5' noWrap> {productDetail.title} </Typography>
                            <Typography variant='body1' noWrap> {productDetail.description} </Typography>
                            <Typography variant='h6' noWrap> {productDetail.category} </Typography>
                            <Typography variant='subtitle1'> Price : { productDetail.price}$</Typography>
                           
                            <Button
                                       variant='contained'
                                       onClick={backToHome}
                               
                            > Shop Now
                            </Button>
                            </CardContent>
                       </Card>
                    </Grid>    
           </Grid>
        }
       </>
  )
}

export default Products