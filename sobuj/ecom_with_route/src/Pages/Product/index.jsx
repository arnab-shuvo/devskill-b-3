import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ProductBlock from '../../Components/ProductBlock';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
const Products = ({productList, showDetail, delProd, updateProd}) =>{

  return (
        <>
            <Grid container sx={10} justifyContent="center">
                <Item>
                     
                    <Grid container item>
                        {productList.map((product)=>{
                            return(
                            <ProductBlock product={product} showDetail={showDetail} delProd={delProd} updateProd={updateProd} />
                            );
                        })}
                    </Grid>
                </Item>
            </Grid>
        </>
    
  );
                    }; 
export default Products;