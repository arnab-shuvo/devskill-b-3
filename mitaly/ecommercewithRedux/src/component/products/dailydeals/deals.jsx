import React , {useEffect,useState} from 'react';
import {getProducts,getProductByLimit} from './../../../utills/api';
import Grid from '@mui/material/Grid';
import ProductDesign from '../Product/product';
import {work} from './../../middleware/middleware';
import {useDispatch,useSelector} from 'react-redux';

const Deals=({seeMorep})=>{
  const dispatch=useDispatch();

  useEffect(() => {
    const chooseFunction = seeMorep ? getProducts():getProductByLimit(); 
    work(chooseFunction,dispatch);  
  }, [seeMorep]);

  const {productList}=useSelector((store)=>store.productsStore);
 
console.log(productList,'productList');
return(
  <>
  <Grid container  justifyContent={'center'} spacing={2} >
    {productList.map((product)=>{
      return (
        <Grid item container md={3} >
        <Grid item xs={12}>      
          <ProductDesign product={product}/>
          </Grid>
          </Grid>
      );
    })}
  </Grid>
  </>
);
}
export default Deals;