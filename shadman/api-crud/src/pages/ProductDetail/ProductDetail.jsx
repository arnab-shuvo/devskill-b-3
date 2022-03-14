import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Rating from '@mui/material/Rating';

const ProductDetail = ({ productDetailID, setFlag }) => {
    const [singleProduct, setSingleProduct] = useState(null)

    const fetchProduct = async () => {
        const api = `https://fakestoreapi.com/products/${productDetailID}`
        const result = await fetch(api)
        const getResult = await result.json()
        setSingleProduct(getResult)
    }

    const updateProduct = async () => {
        const api = `https://fakestoreapi.com/products/${productDetailID}`
        const result = await fetch(api, {
            method: "PUT"
        })
        const getResult = await result.json()
        console.log(getResult)
    }

    const deleteProduct = async () => {
        fetch(`https://fakestoreapi.com/products/${productDetailID}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(json => console.log(json))
        setFlag(true)
    }

    useEffect(() => {
        fetchProduct()
    }, [singleProduct])


    return (
        <div>
            {
                singleProduct ? <Container>
                    <Grid container justifyContent={"center"}  >
                        <Grid item >
                            <Card sx={{ maxWidth: 345 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                            {singleProduct.title[0]}
                                        </Avatar>
                                    }

                                    title={singleProduct.title}
                                    subheader={singleProduct.category}
                                />
                                <CardMedia
                                    component="img"
                                    height=""
                                    image={singleProduct.image}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {singleProduct.description}

                                    </Typography>
                                    <Typography variant="h4" color="text.secondary">
                                        Price: {singleProduct.price}

                                    </Typography>
                                    {
                                        singleProduct?.rating?.rate ? <Rating value={singleProduct.rating.rate}  /> : null
                                    }

                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => setFlag(true)}>View All Products</Button>
                                    <Button onClick={updateProduct}>Update Product</Button>
                                    <Button onClick={deleteProduct}>Delete Product</Button>

                                </CardActions>

                            </Card>

                        </Grid>

                    </Grid>

                </Container > : "Loading"
            }
        </div>


    )
}

export default ProductDetail