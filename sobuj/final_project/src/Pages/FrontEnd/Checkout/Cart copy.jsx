import * as React from 'react';
import { styled } from '@mui/material/styles';
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
import { useNavigate } from 'react-router-dom';
import { loadCartItems, get_carts, removeCartItem } from '../../../store/action/AddToCartAction';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '@mui/material/Icon';
import { green } from '@mui/material/colors';
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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


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
  background-color: #9c27b0;
  color: #fff;
  padding: 6px 12px;
  &:hover {
    background-color: #4b0b57;
  }
  &:focus {
    background-color: #920909;
  }
`;


const CartDetail = () => {
  
const dispatch = useDispatch(); 

const loggedInUser = useSelector((store) =>store.userStore);
const [userToken, setUserToken] = useState(null);


const navigate = useNavigate();
const submitToCheckout = () =>{
  navigate('/user/checkout');
}
const { cart } = useSelector((store) => store.cartItems); 
// if(cart.status==='error'){
//   console.log(cart.message, '=== cart list... error message'); 
// }else{
//   console.log(cart.products, "==== Showing carts Items from Cart page")
// }


useEffect(() => {
  if(loggedInUser.isAuthUser === true){
    const token = loggedInUser.token.userInfo.token;
    setUserToken(loggedInUser.token.userInfo.token)
    dispatch(loadCartItems(token));
  }
}, []);

const handleDeleteBtn=(prodId)=>{
  if(window.confirm("Are you sure about to delete this item?")){
    dispatch(removeCartItem(prodId, loggedInUser.token.userInfo.token));
  }
  
}
  return (
    <>
   
      <Grid
        container
        style={styles.wraperContainer}
        sx={{ flexGrow: 1 }}
        justifyContent="center"
      >
        <Box sx={{ width: '100%', textAlign:"center", mt:5, maxHeight:"100px" }}>
            <Typography variant="h3" gutterBottom component="div">
            Cart Itmes
            </Typography>
        </Box>
        {
          !cart.status==="error"  || cart.status===0 ?
          (
            <>
                <Grid xs={12} container
                 style={{
                  display:'flex',
                  maxHeight:'50px',
                  padding:0,
                  marginTop:'10px',
                  listStyle:'none',
                  textAlign:'center',
                }}>
                  <Grid xs={10} style={{ marginTop:"-10rem", marginBottom:"0", }}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Items</StyledTableCell>
                          <StyledTableCell align="right">Price</StyledTableCell>
                          <StyledTableCell align="right">Quantity</StyledTableCell>
                          <StyledTableCell align="right">Sub-Total</StyledTableCell>
                          <StyledTableCell align="right">Action</StyledTableCell>
                          <StyledTableCell align="right">Delete</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      {cart?.products?.map((dataRow) => (
                          <StyledTableRow key={dataRow._id}>
                              <StyledTableCell component="th" scope="row" justifyContent="center" align='left' 
                              style={{
                                display:'flex',
                                padding:0,
                                margin:0,
                                listStyle:'none',
                                textAlign:'left',
                              }}
                              >
                              <img
                                height={"100"}
                                src={"http://127.0.0.1:8080" + dataRow.productId['image']}
                              />
                              <Typography variant='inherit' align='left' ml={5} mt={5} justifyContent='center'>
                                {dataRow.productId['title']}
                              </Typography>
                            </StyledTableCell>                          
                            <StyledTableCell align="right">$ {dataRow.productId['price']}</StyledTableCell>
                            <StyledTableCell align="right">{dataRow.quantity}</StyledTableCell>

                            <StyledTableCell align="right">
                              $ {dataRow.quantity * dataRow.productId['price']}
                            </StyledTableCell>

                            <StyledTableCell align="right">
                              <IconButton color="secondary" aria-label="add an alarm">
                                <IndeterminateCheckBoxIcon />
                              </IconButton>
                              1
                              <IconButton color="secondary" aria-label="add an alarm">
                                  <AddBoxIcon />
                              </IconButton>
                            </StyledTableCell>

                            <StyledTableCell align="right">
                              <StyledButton> 
                                <DeleteIcon style={{
                                    cursor:"pointer",
                                  }}
                                  onClick={()=>handleDeleteBtn(
                                    dataRow.productId['_id']
                                    )}/>
                              </StyledButton>
                            </StyledTableCell>
                          </StyledTableRow>
                        ))
                      } 
                        
                      </TableBody>
                    </Table>
                  </TableContainer>
                  </Grid>  
                  <Grid xs={2} style={{ marginTop:"-10rem", marginBottom:"0", }}>
                      
                  </Grid>
                </Grid>
                

                <Grid xs={12} style={{
                  // display:'flex',
                  maxHeight:'50px',
                  padding:0,
                  marginTop:'10px',
                  listStyle:'none',
                  textAlign:'center',
                }}>
                  <Button variant="contained" color='secondary' size="medium" onClick={submitToCheckout} >
                    checkout
                  </Button>
                </Grid>
                

              </>
          )
       
        
        
       :
       (
         <>
           <h2>No cart data found</h2>
         </>
       )
     }
      </Grid>
       {/*    */}
    </>
  )
}

export default FrontLayout(CartDetail)
