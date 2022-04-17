import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@material-ui/core';
import Services from '../../../Components/Services';
import Navbar from '../../../Components/Navbar';
import ScrollToTop from '../../../Components/ScrollToTop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { maxHeight } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { loadCartItems, get_carts } from '../../../store/action/AddToCartAction';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '@mui/material/Icon';
import { green } from '@mui/material/colors';


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
    minHeight: "900px",
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
};


const CartDetail = () => {
const loggedInUser = useSelector((store) =>store.userStore);


const navigate = useNavigate();
const submitToCheckout = () =>{
  navigate('/checkout');
}

const dispatch = useDispatch(); 
// const {cartItems} = useSelector((store) =>store); 
const { cart } = useSelector((store) => store.cartItems); 
console.log(cart.products, '=== cart list...'); 

useEffect(() => {
  if(loggedInUser.isAuthUser === true){
    const token = loggedInUser.token.userInfo.token;
    dispatch(loadCartItems(token));
  }
}, []);


  return (
    <>
    <ScrollToTop />
     {cart?.products?.map((row) => (
        <>
          <li key={row._id}>{row.productId['title']}</li>
        </>
      ))
    }
   {/*    <Navbar /> 
      <Services /> 
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Items</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Sub-Total</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((row) => (
                <StyledTableRow key={row.title}>
                  <StyledTableCell component="th" scope="row">
                    {row.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.title}</StyledTableCell>
                  <StyledTableCell align="right">{row.price}</StyledTableCell>
                  <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Icon color="primary">add_circle</Icon>
                    <Icon sx={{ color: green[500] }}>add_circle</Icon>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color='secondary' size="medium" onClick={submitToCheckout} >
          checkout
        </Button>

      </Grid>
       */}
    </>
  )
}

export default CartDetail;
