import { Grid, Typography, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import FrontLayout from '../../../Layouts/FrontEnd/FrontLayout';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getMyOrders, loadOrders } from '../../../store/action/OrderAction';



const MyOrders = () =>{

  const dispatch = useDispatch(); 
  const navigate = useNavigate();

const loggedInUser = useSelector((store) =>store.userStore);
console.log(loggedInUser,'-===== user information order page')
const { cart } = useSelector((store) => store.cartItems); 

// orders[] from OrderReducer
// getAllOrders from root reducer
const { orders } = useSelector((state) => state.getAllOrders); 
console.log(orders, '=====MyOrders from order page');


useEffect(() => {
  dispatch(loadOrders(loggedInUser.token.userInfo.token));
}, []);
 
    
// const getNumberOfItem=()=>{
  
// }
    return(
        <>
        <Grid container  style={{textAlign:"center", display:"flex"}} xs={12}>
          <Grid xs={4}>
            
          </Grid>
          <Grid xs={8} justifyContent="center" style={{textAlign:"center"}}>
            <Grid xs={12}  style={{textAlign:"center"}}>
              <Typography variant="h4" gutterBottom>
                Order List
              </Typography>
            </Grid>
            <Grid xs={12}  style={{textAlign:"center"}}>
                {/* {orderList}? 
                ( */}
                  <List disablePadding>
                  {orders.map((dataRow) => (
                    <NavLink to={"/"}> 
                        <ListItem key={"Order ID: " + dataRow._id} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={"Placed On: "+ dataRow.date} secondary={" Item Quantity: " } />
                        <Typography variant="body2">{dataRow._id}</Typography>
                          {/*+ getNumberOfItem()  <Typography variant="body2">{dataRow.productId['price']}</Typography> */}
                        </ListItem>
                    </NavLink> 
                  ))}
                  </List>
                {/* ):(
                  <Typography variant="h2">No Order Found</Typography>
                ) */}
                  
                   
            </Grid>
          </Grid>
        </Grid>
        </>
    )
}
export default FrontLayout(MyOrders);