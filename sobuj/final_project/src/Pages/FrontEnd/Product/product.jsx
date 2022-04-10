import React, { useEffect } from 'react';
import "../../../App.css";

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
import { loadCategories } from '../../../store/action/CategoryAction';
import { Button, ButtonGroup } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Product = () =>{

    const navigate = useNavigate();
    const toCategory = (id) =>{
        navigate(`/product-category/${id}`);
    }
    const toProduct = () =>{
        navigate(`/all-products/`);
    }

    const { productList } = useSelector((store) => store.productList);
    console.log(productList, "===store");


    const [data, setData] = useState([]);
    const [filter, setFilter]=useState(productList);
    const [loading, setLoading]=useState(false);
    let ComponentMounted = true;

    const dispatch = useDispatch();
    useEffect(()=>{
        fetch("http://127.0.0.1:8080/products")
        .then((res) => res.json())
        .then((json) => {
            dispatch(getProductList(json));
        });
    }, []);




    // Destructuring "categoryList" from CategoryReducer
    const { categoryList } = useSelector((state) => state.prodCategories); // prodCategories is comming from RootReducer (prodCategories:CategoryReducer,)
  
    useEffect(() => {
      dispatch(loadCategories());
    }, []);



    return(
        <>
        {/* <Navbar /> */}
        <Grid container sx={10} justifyContent="center">
            <Item>
            <ButtonGroup disableElevation variant="contained" size="small" >
                <Button color='secondary' onClick={toProduct} style={{ fontSize:"13px;", borderRadius:"5px" }}>All</Button>
                {categoryList.map((row) =>(
                    <Button color='secondary' onClick={()=>{toCategory(row._id)}} style={{ marginLeft:"2px", fontSize:"13px;", borderRadius:"5px" }}>{row.name}</Button>    
                ))}
            </ButtonGroup>
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