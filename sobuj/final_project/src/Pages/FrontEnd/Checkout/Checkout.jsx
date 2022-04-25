import * as React from 'react';
import { Grid, Typography, Button, IconButton } from '@material-ui/core';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FrontLayout from '../../../Layouts/FrontEnd/FrontLayout';
import { checkoutAction } from '../../../store/action/OrderAction';
import { loadCartItems, get_carts, removeCartItem, addCart, modifyCartAction } from '../../../store/action/AddToCartAction';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Styles/Checkout.css';
import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'; 
import AddBoxIcon from '@mui/icons-material/AddBox';

// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];



const StyledButton = styled(Button)`
  /* background-color: #9c27b0; */
  color: #aa0c0c;
  /* padding: 2px; */
  &:hover {
    color: #965909;
  }
  &:focus {
   color: #f0a865;
  }
`;

const Checkout = () => {

  const dispatch = useDispatch(); 
  const navigate = useNavigate();
// const [cart, setCart] = useState();
const loggedInUser = useSelector((store) =>store.userStore);
const { loadCart } = useSelector((store) => store.cartItems); 


useEffect(() => {
  if(loggedInUser.isAuthUser === true){
    dispatch(loadCartItems(loggedInUser.token.userInfo.token));
  }else{
    alert('please login first');
    navigate('/login');
  }
}, []);

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
          navigate('/user/dashboard')
    }

    const get_total_price = () => {
      let totalPrice = 0;
      loadCart?.products?.map((cartData) => (
        totalPrice += (cartData.productId['price'] * cartData.quantity))
        );
      return totalPrice;
    };
    
    const calculateTotalPrice = () =>{
      let shipping = 0;
      let couponDiscount = 0;
      let cartTotalPrice = get_total_price();
    
      let calculatedPrice = (cartTotalPrice + shipping) - couponDiscount;
      return calculatedPrice;
    }

   
async function actionSubmit(dataSubmit) {
  // console.log(dataSubmit.userToken, '==== token from async function');

  return fetch("http://localhost:8080/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authorization": "bearer "+ dataSubmit.userToken
    },
    body: JSON.stringify({
        product: {
          id: dataSubmit.prodId,
          quantity: dataSubmit.quantity,
        },
      }),
  })
    .then((data) => data.json())
    .then((json) => json)
    .then((json) => console.log(json, '===Cart Updated Successfully- CartActionSubmit'));
}

const handleDeleteBtn = async (prodId)=>{
  let userToken = loggedInUser.token.userInfo.token;
      if(window.confirm("Are you sure about to delete this item?")){
        let quantity = 0;
        const actionDispatch = await actionSubmit({
            userToken,
            prodId,
            quantity,
        });
        dispatch(modifyCartAction(actionDispatch));
        dispatch(loadCartItems(loggedInUser.token.userInfo.token));
      }
}

const handleIncreaseBtn = async (prodId, existingQty)=>{
  let userToken = loggedInUser.token.userInfo.token;

        let quantity = existingQty + 1;
        const actionDispatch = await actionSubmit({
            userToken,
            prodId,
            quantity,
        });
        dispatch(modifyCartAction(actionDispatch));
        dispatch(loadCartItems(loggedInUser.token.userInfo.token));
        // window.location.reload();
}

const handleDecreaseBtn = async (prodId, existingQty)=>{
      let userToken = loggedInUser.token.userInfo.token;
        let quantity = existingQty - 1;
        const actionDispatch = await actionSubmit({
            userToken,
            prodId,
            quantity,
        });
        dispatch(modifyCartAction(actionDispatch));
        dispatch(loadCartItems(loggedInUser.token.userInfo.token));
        // window.location.reload();
}

    
  return (
    <>
    <Grid container  class="checkouWrapper" xs={12}>
     <div class="row">
  <div class="col-75">
    <div class="containerCheckout">
      <form action=" ">
        <div class="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com" />
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York" />

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY" />
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001" />
              </div>
            </div>
          </div>

          <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style={{ color:"navy" }}></i>
              <i class="fa fa-cc-amex" style={{ color:"blue"}}></i>
              <i class="fa fa-cc-mastercard" style={{ color:"red"}}></i>
              <i class="fa fa-cc-discover" style={{ color:"orange"}}></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September" />
            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018" />
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352" />
              </div>
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
        </label>
        {/* <input type="submit" value="Continue to checkout" class="btn" /> */}
        <Button variant="contained" color='secondary' size="medium" onClick={confirmOrder} >
           continue to checkout
        </Button>
      </form>
    </div>
  </div>
  <div class="col-25">
    <div class="containerCheckout checkOutSummaryHead">
      
        
      <div className=''>
        <h5>
          <b>Summary</b>
        </h5>
        <div class="row" style={{ borderTop:"1px solid #dbd5db", padding:'5px', fontSize:"1.5rem" }}>
          <div class="col" style={{ textAlign:"left", paddingLeft:"15px", textTransform:"uppercase", fontWeight:"500" }}>
            Total Item - {loadCart?.products?.length}
          </div>
          <div class="col text-right">$ 
          {get_total_price()}
          </div>
        </div>
      </div>
      <hr />
      <div className='checkOutSummaryBody'>
      {
          !loadCart.status==="error"  || loadCart.status===0 ?
          (  
            <>
            {loadCart?.products?.map((dataRow) => (
                <div class="row border-bottom" key={dataRow._id} style={{ padding:"5px" }}>
                  <div class="row main align-items-center">
                    <div class="col-2">
                      <img
                      height={"100"}
                      src={"http://127.0.0.1:8080" + dataRow.productId['image']}
                    />
                    </div>
                    <div class="col-8">
                      <div class="row text-muted itemHeading">{dataRow.productId.category['name']}</div>
                      <div class="row itemName">{dataRow.productId['title']}</div>
                    </div>
                    <div class="col-2">
                            <StyledButton> 
                              <DeleteIcon style={{
                                  cursor:"pointer", fontSize:"1.5rem"}}
                                onClick={()=>handleDeleteBtn(
                                  dataRow.productId['_id']
                                  )}/>
                            </StyledButton>
                        </div>
                  </div>
                  <div className='row'>
                      <div className="col">
                          Qty: {dataRow.quantity}
                        </div>
                        <div class="col-5">
                          {" "}  
                          <IconButton color="primary" aria-label="add an alarm" onClick={()=>handleDecreaseBtn(
                        dataRow.productId['_id'], dataRow.quantity
                        )}
                      >
                              <IndeterminateCheckBoxIcon />
                          </IconButton>
                            <a href="#" class="border">
                              {dataRow.quantity}
                            </a>
                          <IconButton color="primary" aria-label="add an alarm" onClick={()=>handleIncreaseBtn(
                        dataRow.productId['_id'], dataRow.quantity
                        )}>
                              <AddBoxIcon />
                          </IconButton>
                        </div>
                        <div class="col">
                          $ {dataRow.productId['price'] * dataRow.quantity}
                        </div>
                        
                  </div>
                </div>
              ))
            }
            </>
          ):(
            <div class="emptyCart">
              <h4>No items found in the cart!</h4>
            </div>
          )
          }
        <form>
        <div class="row">
          <div class="col" style={{ textAlign:"left", paddingLeft:"15px", textTransform:"uppercase", fontWeight:"500" }}>
            Total Item - {loadCart?.products?.length}
          </div>
          <div class="col text-right">$ 
          {get_total_price()}
          </div>
        </div>
          <p>SHIPPING</p>{" "}
          <select>
            <option class="text-muted">
              Free-Delivery- $0.00
            </option>
          </select>
          <p>GIVE CODE</p> 
          <input id="code" placeholder="Enter your code" />
        </form>
        <div
          class="row"
          style={{
            bordeTop: " 1px solid rgba(0,0,0,.1)",
            padding: "2vh 0",
          }}
        >
          <div class="col"><h5>TOTAL PRICE</h5> </div>
          <div class="col text-right"><h5>$ {calculateTotalPrice()}</h5></div>
        </div>{" "}
        
      </div>
        <Button variant="contained" color='secondary' size="medium" onClick={confirmOrder} >
            checkout
        </Button>
    </div>
  </div>
</div>
    </Grid>
      
    </>
      
  );
}
export default FrontLayout(Checkout)