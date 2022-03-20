import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OptionSelect from '../Components/OptionSelect';
import ProductCard from '../Components/ProductCard';
import { setProducts } from '../Redux/actions/productAction';
const Home = () => {
    const { products } = useSelector(store => store.allProducts)
    const category = useSelector(store=>store.category.product)
    const dispatch = useDispatch();
    const [allCategories, setAllCategories]= useState([])
    const sortingOptions = ["asc", "desc"]
    let url = 'https://fakestoreapi.com/products'
    if(category){
        url = url+`/category/${category}`
    }
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(setProducts(data))
            })
    }, [category])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>{
                setAllCategories(json)
            })
    }, [])
    return (
        <Container sx={{mt: '50px'}}>
            <Grid container spacing={64} sx={{mb: '20px'}}>
                <Grid item md={6}>
                    {
                        allCategories.length>0 && <OptionSelect options={allCategories} title={'Select Category'}/>
                    }
                </Grid>
                <Grid item md={6}>
                    <OptionSelect options={sortingOptions} title="Sort"/>
                </Grid>
                
            </Grid>
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