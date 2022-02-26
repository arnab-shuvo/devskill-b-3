import React, { useState, useEffect } from "react";
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Rating from '@mui/material/Rating';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Preloader from './Preloader';

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

  

const ProductDetail = ({productID, backHome})=>{

  const [selectedProduct, setSelectedProduct]=useState(null);
  const [value, setValue] = React.useState(2);

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${productID}`)
    .then((res)=> res.json())
    .then(json=>{
      setSelectedProduct(json);
    });
}, [productID]);

    return(
        <>
            {
            selectedProduct !== null ? 
            (
              <> 
            <Grid container sx={{ mt:20 }} item xs={8} justifyContent="center" >
              
                 <Grid item xs={6} justifyContent="center">
                 {/* <Card>
                    <CardMedia
                      image={selectedProduct.image}
                      
                    />
                  </Card>*/}
                  <div className="product-image-wrapper" justifyContent="right">
                    <img alt={selectedProduct.title} src={selectedProduct.image} style={{ width: 340, border:"1px solid #ccc", padding:"20px" }} />
                  </div>
                </Grid> 

                <Grid item xs={6} >
                  <Typography variant="h3" gutterBottom component="div">
                    {selectedProduct.title}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom component="div">
                    {selectedProduct.description}
                  </Typography>

                  <Typography sx={{ mt:10 }} variant="h4" gutterBottom component="div">
                    $ {selectedProduct.price}
                  </Typography>

                  <Box
                      sx={{
                        '& > legend': { mt: selectedProduct.rating },
                      }}
                    >
                      <Typography component="legend">Rating</Typography>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </Box>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={()=>{backHome(null)}}
                    sx={{ height:60, mt:10 }}
                    >Back to Home</Button>
                </Grid>
              </Grid>
             
              </>
             ):(
              <Preloader />
            )} 
            
        </>
    )
}

export default ProductDetail;