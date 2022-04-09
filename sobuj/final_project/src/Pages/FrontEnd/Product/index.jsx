import React, { useEffect } from 'react';

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../../../Components/Navbar';
// import { store } from '../../../store/index';
import { getProductList } from '../../../store/action/ProductAction';
import ProductBlock from '../../../Components/ProductBlock';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Product = () =>{

    const { productList } = useSelector((store) => store.productList);
    console.log(productList, "===store");

    const dispatch = useDispatch();
    useEffect(()=>{
        fetch("http://127.0.0.1:8080/products")
        .then((res) => res.json())
        .then((json) => {
            dispatch(getProductList(json));
        });
    }, []);

    return(
        <>
        {/* <Navbar /> */}
        <Grid container sx={10} justifyContent="center">
            <Item>
                <Typography variant="h2" gutterBottom component="div">
                    Product List from Fakecommerce NodeJS API
                </Typography>
                <Grid container item>
                    {productList.map((product)=>{
                        return(
                        <ProductBlock product={product} key={product.id} />
                        );
                    })}
                </Grid>
                <Stack spacing={2}> 
                    <Pagination count={10} color="secondary" />
                </Stack>
            </Item>
        </Grid>
        </>
    )
}

export default Product;