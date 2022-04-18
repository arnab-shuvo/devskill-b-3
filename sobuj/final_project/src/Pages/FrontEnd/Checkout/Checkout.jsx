import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button, Grid } from '@material-ui/core';
import FrontLayout from '../../../Layouts/FrontEnd/FrontLayout';
import { checkoutAction } from '../../../store/action/OrderAction';
import { loadCartItems, get_carts, removeCartItem } from '../../../store/action/AddToCartAction';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];



const Checkout = () => {

  
    // Checkout Cart
    async function checkoutSubmit(orderData) {
      return fetch(`http://localhost:8080/order/checkout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "authorization": "bearer "+ orderData.userToken
          },
        })
        .then((data) => data.json())
        .then((json) => json)
        .then((json) => console.log(json));
    }

    const confirmOrder = async (id)=>{
          const checkoutDispatch = await checkoutSubmit({
            userToken,
            id
          });
          dispatch(checkoutAction(checkoutDispatch));
          // window.location.reload();
          navigate('/user/my-orders')
    }


  return (
    <>
    <Grid container  style={{textAlign:"center", display:"flex"}} xs={12}>
        <Grid xs={8} justifyContent="center" style={{textAlign:"center"}}>
          <Grid xs={12}  style={{textAlign:"center"}}>
            <Typography variant="h6" gutterBottom>
              Order summary
            </Typography>
          </Grid>
          <Grid xs={12}>
            <List disablePadding>
              {products.map((product) => (
                <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                  <ListItemText primary={product.name} secondary={product.desc} />
                  <Typography variant="body2">{product.price}</Typography>
                </ListItem>
              ))}

              <ListItem sx={{ py: 1, px: 0 }}>
                <ListItemText primary="Total" />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  $34.06
                </Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid>
              <Button variant="contained" color='secondary' size="medium" onClick={confirmOrder} >
                Confirm Order
              </Button>
          </Grid>
        
          {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Shipping
              </Typography>
              <Typography gutterBottom>John Smith</Typography>
              <Typography gutterBottom>{addresses.join(', ')}</Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Payment details
              </Typography>
              <Grid container>
                {payments.map((payment) => (
                  <React.Fragment key={payment.name}>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{payment.name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{payment.detail}</Typography>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Grid> */}

        </Grid>
    </Grid>
      
    </>
      
  );
}
export default FrontLayout(Checkout)