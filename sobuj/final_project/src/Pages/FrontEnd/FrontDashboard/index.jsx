import { Avatar, Button, Divider, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { Stack } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
import FrontLayout from '../../../Layouts/FrontEnd/FrontLayout';
import { loadOrders } from '../../../store/action/OrderAction';
import { loadMyInfo } from '../../../store/action/UserAction';
import './styles.css';
import UpdateProfile from './UpdateProfile';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};



const FrontUserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((store) =>store.userStore);
  // console.log(loggedInUser, "==== LoggedUser from Dashboard")

  const { myInfo } = useSelector((store) => store.userStore);
  // console.log(myInfo, '=====myInfo from User Dashboard');

  const { orders } = useSelector((state) => state.getAllOrders); 
  // console.log(orders, '=====MyOrders from User Dashboard');

  useEffect(()=>{
    if(!loggedInUser.token===null || loggedInUser.isAuthUser === true){
      let userToken = loggedInUser.token.userInfo.token;
      // console.log(userToken, '=================token');
      dispatch(loadMyInfo(userToken));
      dispatch(loadOrders(loggedInUser.token.userInfo.token));
    }else{
      alert('please login first');
      navigate('/login');
    }
  },[])




  const toAccount = () =>{
    navigate('/user/dashboard');
  } 
  
  const getTotalPrice = (index) => {
    let totalPrice = 0;
    orders[index].products?.map((orderData) => (totalPrice += orderData.productId['price']));
    return totalPrice;
  };
 
  return (
    // <div className='wrapper'>
    
    <Grid container className="wrapper">
      

      {myInfo.length!==0 ? (
        <>
          <Grid md={2} xs={2} sm={2} className="cardStyle">
            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem button onClick={toAccount}>
                <ListItemText primary="My Account" />
              </ListItem>
              <Divider />
              
            </List>
          </Grid>

          <Grid md={7} xs={10} sm={5} className="cardStyle myOrderContainer">
            <h3>My Orders</h3>
            <hr />
            <Grid container>
              <Grid xs={12} style={{ textAlign: "center" }}>
                <List disablePadding>
                  {orders.map((dataRow, index) => (
                    <NavLink
                      to={"/"}
                      style={{
                        boder: "1px solid #3d0303",
                        borderRadius: "10px",
                        boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      }}
                    >
                      <ListItem
                        key={"Order ID: " + dataRow._id}
                        sx={{ py: 1, px: 0 }}
                        style={{
                          backgroundColor: "#4081be",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                          color: "white",
                        }}
                      >
                        <ListItemText primary={"Order ID:" + dataRow._id} />

                        <ListItemText primary={"Placed On: " + dataRow.date} />
                        {dataRow.status === 0 ? (
                          <Button class="pendingOrder" disabled>
                            Pending
                          </Button>
                        ) : (
                          <Button class="confirmedOrder" disabled style={{ background:"green", color:"white", border:"2px #ccc", padding:"5px 15px"  }}>
                          Order Placed
                        </Button>
                        )}
                      </ListItem>
                      <Stack
                        direction="row"
                        spacing={2}
                        class="avatarRow"
                        style={{
                          padding: "20px",
                          display: " flex",
                          justifyContent: "space-evenly",
                          overflow: "auto",
                        }}
                      >
                        {/* {getProductAvatarImages(dataRow.indexOf('products'))} */}
                        {dataRow.products.map((dataSpcs) => (
                          <>
                            <Avatar
                              style={{ border: "2px solid #85166d" }}
                              alt={dataSpcs.productId["title"]}
                              src={
                                "http://127.0.0.1:8080" +
                                dataSpcs.productId["image"]
                              }
                            />
                            {dataSpcs.productId["title"].substr(0, 30) + "..."}
                          </>
                        ))}
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={2}
                        class="avatarRow"
                        style={{
                          padding: "20px",
                          display: " flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="h5">
                          Item Quantity: {dataRow.products.length}
                        </Typography>
                        <Typography variant="h5">
                          Total Price: ${getTotalPrice(index)}
                        </Typography>
                      </Stack>
                      <hr />
                    </NavLink>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>

          <Grid md={3} xs={10} sm={5} className="cardStyle">
            <h2>{myInfo.firstname}&nbsp;{myInfo.lastname}</h2>
                <p>username: {myInfo.username}</p>
                <p>Phone: {myInfo.phone}</p>
                <p>Email: {myInfo.email}</p>
                <span>
                  <p style={{ fontWeight:"bold" }}>Address:</p>
                  <p>{myInfo.address['city']}</p>
                  <p>{myInfo.address['street']}</p>
                  <p>{myInfo.address['zip']}</p>
                  <p>{myInfo.address['lat']} {myInfo.address['long']}</p>
                </span> 
          
              {/* Update User Information in a Modal Form */}
             <UpdateProfile />
          </Grid>
        </>
      ) : (
        <>
          <h2>No user logged in!</h2>
        </>
      )}
    </Grid>

    // </div>
  );
}

export default FrontLayout(FrontUserDashboard)

