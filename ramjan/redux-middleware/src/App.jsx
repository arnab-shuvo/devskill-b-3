import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAction, increaseAction } from './store/actions/counterAction/Index';
import { getProductListAction } from './store/actions/productAction/Index';



function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store)
  const { counter } = store.countStore;
  const { productList } = store.productStore;
  
  console.log('product data->>', productList)
  const increaseCounter = (value) => {
    dispatch(increaseAction(value))
  }
  const decreaseCounter = (value) => {
    dispatch(decreaseAction(value))
  }
  
  useEffect( () => {
    dispatch(getProductListAction())
  },[])
 

  return (
    <Container>
      <Grid>
        <Grid item>
          <Typography> Counter : {counter }</Typography>
          <Stack direction='row' spacing={2}>
            <Button variant='contained' onClick={()=> increaseCounter(counter+1)}> Increase </Button>
            <Button variant='contained' onClick={()=> decreaseCounter(counter-1)}> Decrease </Button>
          </Stack>
        </Grid>
        <Grid item>
          <table>
            <thead>
              <tr>
                <th> Title </th>
                <th> Category </th>
                <th> Price </th>
              </tr>
            </thead>
            <tbody>
              {
                productList.map((product, index) => (
                  <tr key={index}>
                    <td> {product.title} </td>
                    <td> {product.category}  </td>
                    <td> {product.price}  </td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App