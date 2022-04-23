import * as React from 'react';
import { styled } from '@mui/material/styles';
import './Styles/CartStyles.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid, IconButton } from '@material-ui/core';
import Services from '../../../Components/Services';
import Navbar from '../../../Components/Navbar';
import ScrollToTop from '../../../Components/ScrollToTop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { maxHeight } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import { loadCartItems, get_carts, modifyCartAction, removeCartAction } from '../../../store/action/AddToCartAction';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import FrontLayout from '../../../Layouts/FrontEnd/FrontLayout';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'; 
import AddBoxIcon from '@mui/icons-material/AddBox';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
 

const styles = {
  wraperContainer: {
    backgroundSize: "cover",
    width: "100%",
    // minHeight: "900px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  sectionHeading: {
    fontFamily: "Arial",
    fontWeight: "700",
    color: "#000",
    borderWidth: "20%",
  },
  sectionText: {
    marginTop: "5px",
    fontSize: "16px",
    color: "#fff",
    letterSpacing: "0.5px",
  },
  sectionHeadBtmLine: {
    width: "60px",
    height: "3px !important",
    backgroundColor: "#a43f49",
    margin: "10px auto",
  },
  iconStyle:{
    padding:0,
    margin:0,
    },
    
};

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


const CartDetail = () => {
  
const dispatch = useDispatch(); 

const loggedInUser = useSelector((store) =>store.userStore);


const navigate = useNavigate();
const submitToCheckout = () =>{
  navigate('/user/checkout');
}
const toHome =()=>{
  navigate('/');
}
const { loadCart } = useSelector((store) => store.cartItems); 
// if(loadCart.status==='error'){
//   console.log(loadCart.message, '=== cart list... error message'); 
// }else{
console.log(loadCart, "==== Showing carts Items from Cart page")
// }


useEffect(() => {
  if(loggedInUser.isAuthUser === true){
    dispatch(loadCartItems(loggedInUser.token.userInfo.token));
  }else{
    alert('please login first');
    navigate('/login');
  }
}, []);



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

  return (
      <div class="cartWrapper">
        <div class="row wrapperHead">
          <h2>Shopping Cart</h2>  
          <hr align="center" />
        </div> 
        <div class="card">
        <div class="row">
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4>
                    <b>Cart detail</b>
                  </h4>
                </div>
                 
              </div>
            </div>
          {
          !loadCart.status==="error"  || loadCart.status===0 ?
          (  
            <>
            {loadCart?.products?.map((dataRow) => (
                <div class="row border-top border-bottom" key={dataRow._id}>
                  <div class="row main align-items-center">
                    <div class="col-2">
                    <img
                      height={"100"}
                      src={"http://127.0.0.1:8080" + dataRow.productId['image']}
                    />
                    </div>
                    <div class="col-4">
                      <div class="row text-muted itemHeading">{dataRow.productId.category['name']}</div>
                      <div class="row itemName">{dataRow.productId['title']}</div>
                    </div>
                    <div className="col">
                      Qty: {dataRow.quantity}
                    </div>
                    <div class="col-2">
                      {" "}  
                      <IconButton color="primary" aria-label="add an alarm"
                      onClick={()=>handleDecreaseBtn(
                        dataRow.productId['_id'], dataRow.quantity
                        )}
                      >
                          <IndeterminateCheckBoxIcon />
                      </IconButton>
                        <a href="#" class="border">
                          {dataRow.quantity}
                        </a>
                      <IconButton color="primary" aria-label="add an alarm" 
                      onClick={()=>handleIncreaseBtn(
                        dataRow.productId['_id'], dataRow.quantity
                        )}
                      >
                          <AddBoxIcon />
                      </IconButton>
                    </div>
                    <div class="col">
                      $ {dataRow.productId['price'] * dataRow.quantity}
                    </div>
                    <div class="col">
                        <StyledButton> 
                          <DeleteIcon style={{
                              cursor:"pointer", fontSize:"1.5rem"}}
                            onClick={()=>handleDeleteBtn(
                              dataRow.productId['_id']
                              )}/>
                        </StyledButton>
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
             
            <div class="back-to-shop">
               <Button variant="outlined" onClick={toHome}>Back to Shop</Button>
             </div>
          </div>
          <div class="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            
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
            <Button variant="contained" color='secondary' size="medium" onClick={submitToCheckout} >
                checkout
            </Button>
          </div>
        </div>
      </div>
      </div>

      
  );
}

export default FrontLayout(CartDetail)
