import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import BackendLayout from '../../Layouts/Backend/Layouts';
import { Button, Grid, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loadOrderDetail } from '../../store/action/OrderAction';
import { getUserInfo } from '../../store/action/UserAction';


const TAX_RATE = 0.07;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
  return qty * unit;
}

function createRow(desc: string, qty: number, unit: number) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

interface Row {
  desc: string;
  qty: number;
  unit: number;
  price: number;
}

// function subtotal(items: readonly Row[]) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

// const invoiceSubtotal = subtotal(rows);
const invoiceSubtotal = 0;
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const OrderDetail = () => {
    
    const { id } = useParams();

    
  const loggedInUser = useSelector((store) =>store.userStore);
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const { orderDetail } = useSelector((state) => state.orderDetail); 

  console.log(orderDetail, '======= ORDER DETAIL INFORMATION')
  useEffect(()=>{
    if(!loggedInUser.token===null || loggedInUser.isAuthUser === true){
    //   let userToken = loggedInUser.token.userInfo.token;
      dispatch(loadOrderDetail(id, loggedInUser.token.userInfo.token));
    }else{
      alert('please login first');
      navigate('/login');
    }
  },[])

    return (
        <Grid container style={{ background:"#fff", padding:"20px", border:"1px solid purple" }}>
            <Grid xs={12}>
                <Typography mt={5} variant='h4' align="center">
                    Order Detail
                </Typography>
                
            </Grid>
            <Grid xs={12} style={{ display:"flex", marginTop:"50px" }} >
                <Grid xs={6} style={{ marginTop:"50px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Order Id: { id }
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Date: {orderDetail.date}
                    </Typography>
                </Grid>
                <Grid xs={6} align="right">
                    <Grid sx={12}  align="right" style={{ display:"flex", justifyContent:' space-between', paddingLeft:"50px" }} >
                        <Button variant='contained' color='primary'>Approve</Button>
                        <Button variant='outlined' color='error'>Cancel</Button>
                        
                    </Grid>
                    <Card style={{ maxWidth: "90%", border:"1px solid #ccc", margin:"20px", marginRight:0 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    { orderDetail.userId.firstname + ' ' + orderDetail.userId.lastname }
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Phone: {orderDetail.userId.phone}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Email: {orderDetail.userId.email}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    City: {orderDetail.userId.address.city}, 
                                    Stret Address: {orderDetail.userId.address.street}, <br />
                                    Zipcode: {orderDetail.userId.address.zipcode} 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead >
                    <TableRow style={{ fontWeight:"bold !important", background:"#4b1e4b"}}>
                        <TableCell align="center" colSpan={4} sx={{ color:"white", fontWeight:'bold' }}>
                        Details
                        </TableCell>
                        <TableCell align="right" sx={{ color:"white", fontWeight:'bold' }}>Price</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="right">Category.</TableCell>
                        <TableCell align="right">Unit Price</TableCell>
                        <TableCell align="right">Qty.</TableCell>
                        <TableCell align="right">Sub Total.</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orderDetail?.products?.map((productRow) => (
                        <TableRow key={productRow.productId._id}>
                        <TableCell>{productRow.productId.title}</TableCell>
                        <TableCell align="right">{productRow.productId.category.name}</TableCell>
                        <TableCell align="right">{ccyFormat(productRow.productId.price)}</TableCell>
                        <TableCell align="right">{productRow.quantity}</TableCell>
                        <TableCell align="right">{ccyFormat(productRow.quantity * productRow.productId.price)}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={3} style={{ fontWeight:"bold" }}>Subtotal</TableCell>
                        <TableCell align="right" style={{ fontWeight:"bold" }}>{ccyFormat(invoiceSubtotal)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2} style={{ fontWeight:"bold" }}>Tax</TableCell>
                        <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                        <TableCell align="right" style={{ fontWeight:"bold" }}>{ccyFormat(invoiceTaxes)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3} style={{ fontWeight:"bold" }}>Total</TableCell>
                        <TableCell align="right" style={{ fontWeight:"bold" }}>{ccyFormat(invoiceTotal)}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>

    )
}

export default BackendLayout(OrderDetail);
