import AddIcon from '@mui/icons-material/Add';
import BackspaceIcon from '@mui/icons-material/Backspace';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Index';
import basePath from '../../Config/Index';


const useStyle = {
  img: {
    width: '40px'
  },
  marginY: {
    marginTop: '10px',
    marginBottom: '10px'
  },
  tableWidth: {
    width : '60px'
  }
}


function Cart() {
  const { products, totalQuantities, totalPrice } = useSelector((store) => store.shoppingStore)
  console.log(products, 'cart info from cart page')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleCheckOut = () => {
    alert("Your order hasbeen submitted")
    navigate('/');

  }
  return (
      <Layout>
          <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                  <NavLink to='/product'> <Button variant='contained' fullWidth> Back </Button></NavLink>
              </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={10} md={10}>
            <TableContainer component={Paper} style={useStyle.marginY}>
              <Table aria-label='Cart'>
                <TableHead>
                  <TableRow>
                    <TableCell> ID </TableCell>
                    <TableCell> Product Image </TableCell>
                    <TableCell > Product Name </TableCell>
                    <TableCell> Price  </TableCell>
                    <TableCell> Inc/Dec  </TableCell>
                    <TableCell> Remove  </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    
                  products.length == 0 ? <TableRow><TableCell>You have no Item in your cart</TableCell></TableRow> :
                    products.map((product, index) => 
                    <TableRow key={index}>
                      <TableCell> { index+1  } </TableCell>
                      <TableCell> <img src={basePath + product.image } alt='productImage' style={useStyle.img}/></TableCell>
                      <TableCell > <Typography variant='body2'> {product.title} </Typography> </TableCell>
                      <TableCell align='center'> {product.price} </TableCell>
                        <TableCell>
                          <RemoveIcon onClick={() => dispatch({type: 'DEC', payload: product._id}) }/>
                          {product.quantity}
                          <AddIcon onClick={() => dispatch({type: 'INC', payload: product._id}) } fontSize="small" />
                        </TableCell>
                     
                      <TableCell> <BackspaceIcon onClick={() => dispatch({type: 'REMOVE', payload: product._id}) }/> </TableCell>
                    </TableRow>
                       
                    )
                  
                  }
                  
                </TableBody>
              </Table> 
          </TableContainer>
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
          <TableContainer>
            <Table aria-label='Summery'>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2}> Summery </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Total Items</TableCell>
                  <TableCell>{totalQuantities}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total Price</TableCell>
                  <TableCell>{totalPrice} </TableCell>
                </TableRow>
                <TableRow>
                <TableCell colSpan={2}> <Button fullWidth variant='contained' onClick={handleCheckOut}> Check Out </Button></TableCell>
                </TableRow>
              </TableBody>

            </Table>
              </TableContainer>
            </Grid>
          </Grid>
    </Layout>
      
  )
}

export default Cart