import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Rating from '@mui/material/Rating';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Preloader from '../../../Components/Preloader';
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../../Components/Navbar";

import { getProductDetail } from "../../../store/action/ProductAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

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
    console.log(id, "===id");
    
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
    

    return(
        <>      
            <Navbar />

            <Grid container sx={{ mt:5 }} item xs={8} justifyContent="center" >
                 <Grid item xs={6} justifyContent="center">
                  <div className="product-image-wrapper" justifyContent="right">
                    <img alt={ title} src={"http://127.0.0.1:8080"+  image} style={{ width: 550, border:"1px solid #ccc", padding:"20px" }} />
                  </div>
                </Grid> 

                <Grid item xs={6} >
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
                    onClick={toHome}
                    sx={{ height:60, mt:10 }}
                    >Back to Home</Button>
                </Grid>
              </Grid>
        </>
    )
}

export default ProductDetail;