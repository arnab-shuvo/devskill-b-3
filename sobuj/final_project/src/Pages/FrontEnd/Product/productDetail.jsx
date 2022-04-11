import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Skeleton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Preloader from '../../../Components/Preloader';
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import NavbarMui from "../../../Components/NavbarMui";

import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../../store/action/ProductAction";
import { addCart, delCart } from "../../../store/action/AddToCartAction";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



const ProductDetail = () =>{
    const navigate = useNavigate();
    const toHome = () =>{
        navigate(`/`);
    }
    
    const { id } = useParams();
    //console.log(id, "===id");

    const { productDetail } = useSelector((store) => store.productDetail);
    const { title, image, description, price, category}     = productDetail;

    const dispatch = useDispatch();

    useEffect(()=>{
            fetch (`http://127.0.0.1:8080/products/${id}`)
            .then((res) => res.json())
            .then((json) =>{
                dispatch(getProductDetail(json));
            });
        }, [id]);
    
    const addProduct = (product) => {
      dispatch(addCart(product));
    };

    const toCartDetail = () =>{
          navigate(`/`);
    }

    const loading = () =>{
      return(
        <>
            <Grid item xs={6} md={4} sm={4} justifyContent="center">
              <Skeleton height={400} />
            </Grid>
            <Grid item xs={6}  md={8} sm={8} justifyContent="left">
              <Skeleton height={150} width={300} />
              <Skeleton height={50} width={300} />
            </Grid>
        </>
      )
    }
    return(
        <>      
            <Navbar />
            <NavbarMui />

            <Grid container item sx={{ mt:5 }}  xs={12} justifyContent="center" >
                 <Grid item xs={6} md={4} sm={4} justifyContent="center">
                  <div className="product-image-wrapper" justifyContent="right">
                    <img alt={ title} src={"http://127.0.0.1:8080"+  image} style={{ width: "90%", border:"1px solid #ccc", padding:"20px" }} />
                  </div>
                </Grid> 

                <Grid item xs={6}  md={8} sm={8} justifyContent="left">
                  <Typography variant="h3" gutterBottom component="div">
                    { title}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom component="div">
                    { description}
                  </Typography>

                  <Typography sx={{ mt:10 }} variant="h4" gutterBottom component="div">
                    $ { price}
                  </Typography>

                  <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={addProduct}
                    sx={{ height:60, mt:10 }}
                    startIcon={<AddShoppingCartIcon />}
                    >add to cart</Button>

                    <Button 
                    variant="outlined" 
                    color="secondary" 
                    onClick={toCartDetail}
                    sx={{ height:60, mt:10 }}
                    >go to cart</Button>
                  
                </Grid>
              </Grid>
        </>
    )
}

export default ProductDetail;