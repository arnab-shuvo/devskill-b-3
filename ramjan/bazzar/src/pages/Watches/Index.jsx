import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import Layout from '../../components/Layout/Index'
import basePath from '../../Config/Index'
import { getAllProductListByCategoryAction } from '../../store/actions/CategoryProductAction/Index'


const styles = {
  productImage: {
    width: '100%'
  },
  scroll: {
    display: 'flex'
  }
}

function Watches() {
  const { id } = useParams()
  console.log(id)
  const [page, setPage] = useState(2);
  const [noMore, setNoMore] = useState(true)
  
  
  
  const allProductsFromCategory = useSelector((store) => store.categoryProductStore)
  const dispatch = useDispatch()
  console.log(allProductsFromCategory)
  
  
  useEffect( () => {
    dispatch(getAllProductListByCategoryAction(cat));
  }, []);
  
  
  
  // const fetchMoreData = async () => {
  //   const res = await fetch(`http://localhost:8080/products?page=2&limit=12`)
  //   const data = await res.json()
  //   return data;
  // }

//   const fetchData = async () => {
//     const moreProducts = await fetchMoreData()
//     setPage(page+1)
//     dispatch(setProductList(moreProducts));
//     setNoMore(false)
//     console.log('hello')
//     console.log(page)
// }
 

  return (
    <>
      <Layout>
        <Typography variant='h3'> Shop with Us </Typography>
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
                
                <NavLink to={product._id}>
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

export default Watches