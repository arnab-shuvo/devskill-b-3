import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Layout from '../../components/Layout/Index'
import basePath from '../../Config/Index'
import { getProductListAction, setProductList } from '../../store/actions/ProductAction/Index'


const styles = {
  productImage: {
    width: '100%'
  },
  scroll: {
    display: 'flex'
  }
}

function Shop() {
  const [order, setOrder] = useState('desc')
  const [page, setPage] = useState(2);
  const [noMore, setNoMore] = useState(true)
  
  const dispatch = useDispatch()
  const store = useSelector((store) => store.productStore)

  const { products } = store

  useEffect( () => {
    dispatch(getProductListAction())
  }, []);



const searchFilter = (text)=> {
  const typed = text.target.value
  
  if (typed) {
      const filteredData = products.filter( (item)=> {
          const userTypedData = text.target.value.toLowerCase();
          const itemData = item.title.toLowerCase()
          return itemData.indexOf(userTypedData) > -1;
      })
    dispatch(setProductList(filteredData))
    
  } else {
      fetch('http://localhost:8080/products')
      .then((res) => res.json())
      .then( json => {
        dispatch(getProductListAction(json));
      })
    }
  }
  


  return (
    <>
      <Layout>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
              <TextField
                label='Search'
                fullWidth
                onChange={ (text)=> searchFilter(text)}
              />
          </Grid>
         
          
        </Grid>
        <Typography variant='h3'> Shop With us </Typography>
        <Grid container spacing={3} my={2}>
          
          {
            products.map((product, index) =>
              <Grid item xs={6} sm={4} md={3} key={product._id}>
              {/* <InfiniteScroll
                dataLength={products.length}
                hasMore={noMore}
                next={fetchData}
              > */}
                <img src={ basePath + product.image} alt='product ' style={styles.productImage} />
                <Typography variant='body1' noWrap> {product.title}</Typography>
                <Typography variant='body2'>  Price: ৳{product.price} </Typography>
                <NavLink to={`${product._id}`} prod={ product }>
                  <Button variant='contained'> Details </Button>
                </NavLink>
                {/* </InfiniteScroll> */}
              </Grid>
              )
            }
           
        </Grid>
      </Layout>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.shoppingStore.products,
      }
};

export default connect(mapStateToProps)(Shop);