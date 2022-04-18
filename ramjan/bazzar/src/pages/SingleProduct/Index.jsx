import { Button, Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import Layout from '../../components/Layout/Index';
import basePath from '../../Config/Index';
import { addToCart } from '../../store/actions/ShoppingAction/Index';
import { getSingleProductListAction } from '../../store/actions/SingleProductAction/Index';
import Signin from '../Signin/Index';



function SingleProduct(props) {
 const [quantity, setQuantity ] =useState(1)
  console.log(props)
  const { id } = useParams();
  const navigate = useNavigate();
  
  const styles = {
    productImage: {
      width: '100%'
    },
    borderBottom: {
      borderBottom: '1px solid gray'
    }
  }
  
  const singleItem = useSelector((store) => store.singleProductStore)
  const dispatch = useDispatch()
  const { product } = singleItem
  const userData = useSelector((store) => store.userStore);
  console.log(userData)

  useEffect(() => {
    dispatch(getSingleProductListAction(id));
  }, []);



  return (
    <>
      
        <Layout>
          <Grid container spacing={2} my={3}>
           <Grid item xs={12} sm={4} md={4} >
              <img src={basePath+product.image} alt='product' style={styles.productImage}/>
            </Grid>
            <Grid item xs={12} sm={4} md={4} >
              <List >
                <ListItem button>
                  <ListItemText primary={product.title}/>
                </ListItem>
                <Divider />
                <ListItem button divider>
                  <ListItemText primary="Reviews" />
                </ListItem>
                <ListItem button>
                <ListItemText primary={product.price} />
                </ListItem>
                <Divider light />
                <ListItem button>
                  <ListItemText primary='' />
                </ListItem>
                <ListItem button>
                  <Button variant='contained' onClick={() => navigate(-1)}>go back</Button>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={4} md={4} >
            <List >
                <ListItem button>
                  <Typography> Status: { product.stock > 0? 'In Stock': 'Out of Stock'}</Typography>
                </ListItem>
              <Divider />
              <ListItem button>
                <Button onClick={ ()=> setQuantity(quantity - 1)}> - </Button>
                  {quantity}
                  <Button  onClick={() => setQuantity(quantity + 1)}> + </Button>
                </ListItem>
                <Divider />
              <ListItem button divider>
                {
                  userData.token ==null ? <Signin /> :
                  <Button variant='contained'
                  onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}> Add to Cart
                </Button>
                }
                

                </ListItem> 
              </List>
            </Grid>
          </Grid>
        </Layout>
      </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart : (product)=> dispatch(addToCart(product)),
  }
}

export default connect(null, mapDispatchToProps)(SingleProduct);