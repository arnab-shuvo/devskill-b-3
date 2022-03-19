import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';
import { setProducts } from '../Redux/actions/productAction';
const Home = () => {
    const { products } = useSelector(store => store.allProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                dispatch(setProducts(data))
            })
    }, [])
    return (
        <Container sx={{mt: '50px'}}>
            <Grid container spacing={8}>
                {products.map(product => (
                        <Grid
                            item
                            xs={12}
                            md={4}
                            key={product.id}
                            sx={{
                                display: 'flex',
                                flex: '1'
                            }}
                        >
                            <ProductCard product={product} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default Home;