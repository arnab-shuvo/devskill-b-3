import { Button, Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled} from '@mui/system';
import Loader from './Loader';

const MdTitle = styled(Typography)(({theme})=>({
    pb: '10px',
    [theme.breakpoints.down('md')]: {
        display:'none',
      },
}))
const SmTitle = styled(Typography)(({theme})=>({
    fontWeight:'bold',
    textAlign:'center',
    [theme.breakpoints.up('md')]: {
        display:'none',
      },
}))

const ProductDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { title, price, image, description, category, rating } = product;
    useEffect(() => {
        fetch(` https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(res => setProduct(res));
    }, [id])
    return (
        <>
            {
                Object.keys(product).length === 0
                    ? <Loader></Loader>
                    : <Paper>
                        <Box sx={{p: '10px'}}>
                            <SmTitle variant='h5'>{title}</SmTitle>
                        </Box>
                        <Grid container
                            spacing={0}
                            direction={{ xs: "column-reverse", md: "row" }}
                            alignItems="center"
                            justifyContent="center"
                            style={{
                                 minHeight: '100vh' 
                            }}
                        >
                            <Grid item xs={12}
                                md={6}
                                sx={{
                                    width: '80%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <Box component='div' style={{ width: '80%' }}>
                                    <MdTitle variant='h4' sx={{ pb: '10px' }}>{title}</MdTitle>
                                    <Typography sx={{ pb: '30px' }} variant='subtitle1' align='justify'>{description}</Typography>
                                    <Typography variant='h6' sx={{ fontWeight: '600', pb: '10px' }}>Category: {category}</Typography>
                                    <Rating
                                        sx={{ pb: '10px' }}
                                        readOnly
                                        value={rating.rate}
                                        name="half-rating-read"
                                        defaultValue={2.5}
                                        precision={0.5}
                                    />
                                    <Typography sx={{ pb: '10px' }}>Price: {price}$</Typography>
                                    <Button variant='contained' onClick={() => navigate(-1)}>Go Back</Button>
                                </Box>

                            </Grid>
                            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={image} alt="" style={{ width: '60%' }} />
                            </Grid>
                        </Grid>
                    </Paper>
            }
        </>
    );
};

export default ProductDetails;