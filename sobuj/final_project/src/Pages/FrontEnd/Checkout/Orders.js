import { Grid, Typography, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import FrontLayout from '../../../Layouts/FrontEnd/FrontLayout';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getMyOrders } from '../../../store/action/OrderAction';

const MyOrders = () =>{
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

const loggedInUser = useSelector((store) =>store.userStore);
const { cart } = useSelector((store) => store.cartItems); 
const { myOrders } = useSelector((store) => store.myOrders); 
console.log(myOrders, '=====MyOrders from order page');
useEffect(()=>{
      if(loggedInUser.isAuthUser === true){
        fetch(`http://localhost:8080/order/my-order`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "authorization": "bearer "+ loggedInUser.token.userInfo.token
          },
        })
        .then((data) => data.json())
        .then((json) => json)
        .then((json) => console.log(json, "==== OrderList"))
        .then((json) => dispatch(getMyOrders(json)));
      }
}, []);
    

    return(
        <>
        <Grid container  style={{textAlign:"center", display:"flex"}} xs={12}>
          <Grid xs={8} justifyContent="center" style={{textAlign:"center"}}>
            <Grid xs={12}  style={{textAlign:"center"}}>
              <Typography variant="h4" gutterBottom>
                Order List
              </Typography>
            </Grid>
            <Grid xs={12}  style={{textAlign:"center"}}>
                {getMyOrders.length>0} ?
                (
                  <List disablePadding>
                  {myOrders.map((dataRow) => (
                    <NavLink to={"/"}> 
                        <ListItem key={"Order ID: " + dataRow._id} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={"Order Placed On: "+ dataRow.date} secondary={" Item Quantity: " + dataRow.products['length'] } />
                          {/* <Typography variant="body2">{dataRow.productId['price']}</Typography> */}
                        </ListItem>
                    </NavLink> 
                  ))}
                  </List>
                ):(
                  <Typography variant="h2">No Order Found</Typography>
                )
                  
                   
            </Grid>
          </Grid>
        </Grid>
        </>
    )
}
export default FrontLayout(MyOrders);