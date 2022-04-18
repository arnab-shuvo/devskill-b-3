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
import { Skeleton } from '@mui/material';

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
    
    //console.log(productList, "===store");

   // Destructuring "categoryList" from CategoryReducer
   const { categoryList } = useSelector((state) => state.prodCategories); // prodCategories is comming from RootReducer (prodCategories:CategoryReducer,)
  
 
    const [filter, setFilter]=useState(productList);
    console.log(filter, "===Filter")
    const [loading, setLoading]=useState(false);
    let ComponentMounted = true;

    const filterProduct = (cat) =>{
        const updatedList = productList.filter((x)=>x.category._id === cat);
        setFilter(updatedList);
    }


    const dispatch = useDispatch();
    useEffect(()=>{
        fetch("http://127.0.0.1:8080/products")
        .then((res) => res.json())
        .then((json) => {
            dispatch(getProductList(json));
            dispatch(loadCategories());
            
        });
        if(ComponentMounted){
            setFilter(productList);
        }
        return()=>{
            ComponentMounted = false;
        }
    }, []);



 

    const ShowProducts = () =>{
        return(
            <>
                <Grid container item >
                    <ButtonGroup disableElevation variant="contained" size="small" justifyContent="center">
                        <Button color='primary' onClick={()=>setFilter(productList)} style={{ fontSize:"13px;", borderRadius:"5px", height:"50px" }} size="small" >All</Button>
                        {categoryList.map((row) =>(
                            <Button onClick={()=>filterProduct(row._id)} color='secondary'  style={{ marginLeft:"2px", fontSize:"13px;", borderRadius:"5px", height:"50px" }} size="small" >{row.name}</Button>    
                        ))}
                        {/* onClick={()=>{toCategory(row._id)}} */}
                    </ButtonGroup> 
                </Grid>
                   
                
                <Grid container item>
                    {   filter.map((product)=>{
                    return(
                        <ProductBlock product={product} key={product._id} />
                        );
                    })
                }
                </Grid>
                    
                
            </>
        )
        
        
    }

    const Loading = () =>{
        return(<>
           <Grid sx={3}>
                <Skeleton height={350} />
           </Grid>
           <Grid sx={3}>
                <Skeleton height={350} />
           </Grid>
           <Grid sx={3}>
                <Skeleton height={350} />
           </Grid>
           <Grid sx={3}>
                <Skeleton height={350} />
           </Grid>
           <Grid sx={3}>
                <Skeleton height={350} />
           </Grid>
        </>)
    }



    return(
        <>
        <Grid container sx={10} justifyContent="center">
            <Item>
                
                 
                {loading ? <Loading />:<ShowProducts />}
                {/* {productList.map((product)=>{
                    return(
                    <ProductBlock product={product} key={product.id} />
                    );
                })} 
                 
                <Stack spacing={2}> 
                    <Pagination count={10} color="secondary" />
                </Stack>*/}
            </Item>
        </Grid>
        </>
    )
}
 
export default Product;