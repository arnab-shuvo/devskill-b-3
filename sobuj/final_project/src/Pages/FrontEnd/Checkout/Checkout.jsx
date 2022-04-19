import * as React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FrontLayout from '../../../Layouts/FrontEnd/FrontLayout';
import { checkoutAction } from '../../../store/action/OrderAction';
import { loadCartItems, get_carts, removeCartItem } from '../../../store/action/AddToCartAction';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];



const Checkout = () => {

  const dispatch = useDispatch(); 
  const navigate = useNavigate();

const loggedInUser = useSelector((store) =>store.userStore);
const { cart } = useSelector((store) => store.cartItems); 

    // Checkout Cart
    async function checkoutSubmit(orderData) {
      //console.log(orderData, "----orderData")
      return fetch("http://localhost:8080/order/checkout", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "authorization": "bearer "+ orderData.token
          },
        })
        .then((data) => data.json())
        .then((json) => json)
        .then((json) => console.log(json, '---=== Checkout Confirmed'));
    }

    const confirmOrder = async (id)=>{
          let token=loggedInUser.token.userInfo.token;
          const checkoutDispatch = await checkoutSubmit({
            token,
          });
          dispatch(checkoutAction(checkoutDispatch));
          // window.location.reload();
          navigate('/user/my-orders')
    }


  return (
    <>
    <Grid container  style={{textAlign:"center", display:"flex", backgroundColor:"pink"}} xs={12}>
        <Grid xs={8} justifyContent="center" style={{textAlign:"center", backgroundColor:"#eee", padding:"5rem"}}>
          <Grid xs={12}  style={{textAlign:"center"}}>
            <Typography variant="h6" gutterBottom>
              Order summary
            </Typography>
          </Grid>
          <Grid xs={12}>
            <List disablePadding>
            {cart?.products?.map((dataRow) => (
                <>
                <ListItem key={dataRow.productId['title']} sx={{ py: 1, px: 0 }}>
                  <ListItemText primary={dataRow.productId['title']} secondary={dataRow.productId['_id']} />
                  <Typography variant="body2">{dataRow.productId['price']}</Typography>
                </ListItem>
                </>
              ))}
            </List>
          </Grid>
          <Grid>
              <Button variant="contained" color='secondary' size="medium" onClick={confirmOrder} >
                Confirm Order
              </Button>
          </Grid>
        </Grid>
        <Grid xs={4} container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Shipping
              </Typography>
              <Typography gutterBottom>John Smith</Typography>
              <Typography gutterBottom></Typography>
              {/* {addresses.join(', ')} */}
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Payment details
              </Typography>
              <Grid container>
                {/* {payments.map((payment) => ( */}
                  <React.Fragment >
                    {/* key={payment.name} */}
                    <Grid item xs={6}>
                      <Typography gutterBottom>Card Payment</Typography>
                      {/* {payment.name} */}
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>Payment on 19/04/2022</Typography>
                      {/* {payment.detail} */}
                    </Grid>
                  </React.Fragment>
                {/* ))} */}
              </Grid>
            </Grid>
          </Grid>
    </Grid>
      
    </>
      
  );
}
export default FrontLayout(Checkout)