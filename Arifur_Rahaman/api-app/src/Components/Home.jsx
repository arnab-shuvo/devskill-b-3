import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Loader from './Loader';
import { Button, Container, Rating, Stack } from '@mui/material';

const Home = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(res => setProducts(res));
    }, [])
    return (
        <>
            {
                products.length
                    ? <Container>
                        <Grid container spacing={8}>
                            {
                                products.map(product => {
                                    const { id, title, image, rating, price } = product;
                                    return (
                                        <Grid
                                            item
                                            xs={12}
                                            md={4}
                                            key={id}
                                            sx={{
                                                display: 'flex',
                                                flex: '1'
                                            }}
                                        >
                                            <Paper elevation={8}
                                                sx={{
                                                    p: '20px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <Stack
                                                    justifyContent='center'
                                                    alignItems='center'
                                                    sx={{
                                                        height: '100%'
                                                    }}
                                                >
                                                    <img style={{ width: '80%' }} src={image} alt='' />
                                                </Stack>
                                                <Stack>
                                                    <Typography variant='h6' sx={{ fontWeight: '600' }}>{title}</Typography>
                                                    <Rating
                                                        sx={{ pb: '10px' }}
                                                        readOnly
                                                        value={rating.rate}
                                                        name="half-rating-read"
                                                        defaultValue={2.5}
                                                        precision={0.5}
                                                    />
                                                    <Typography variant='subtitle1' sx={{ fontWeight: '600' }}>{price}$</Typography>
                                                    <Button
                                                        variant='contained'
                                                        onClick={() => navigate(`productDetails/${id}`)}
                                                    >
                                                        Details
                                                    </Button>
                                                </Stack>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Container>
                    : <Loader></Loader>
            }</>
    )
};

export default Home;