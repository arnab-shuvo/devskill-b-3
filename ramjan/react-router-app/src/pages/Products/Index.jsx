
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Grid, MenuItem, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MiddleContent from '../../components/MiddleContent';
import ProductList from '../../components/ProductList/Index';
import SmallBanner from '../../components/SmallBanner/Index';
import { Description, Title } from '../../lib/Data/Data';

function Products() {
  const [products, setProducts] = useState([]) 
  const [order, setOrder] = useState('desc')
  const [category, setcategory] = useState('')
  useEffect(() => {
    // setProductProgress(true)
    fetch('https://fakestoreapi.com/products')
    .then( (res)=> res.json() )
    .then((data) => setProducts(data))
    
    // setProductProgress(false)
    
  }, [])
 
  const searchFilter = (text) => {
    const typed = text.target.value
    if (typed) {
        const filteredData = products.filter( (item)=> {
            const userTypedData = text.target.value.toLowerCase();
            const itemData = item.title.toLowerCase()
            return itemData.indexOf(userTypedData) > -1;
        })
      setProducts(filteredData)
      console.log(typed)
    } 
  }

  const ascDes = [
    {
        label: 'ASC',
        value: 'asc'
    },
    {
        label: 'DESC',
        value: 'desc'
    },
  ]
  
  const changeOrder = (e) => {
    const newOrder = e.target.value
    setOrder(newOrder)
    fetch(`https://fakestoreapi.com/products?sort=${newOrder}`)
    .then( (res)=> res.json() )
    .then( (data)=> setProducts(data) )   
}

const categories = [
  {
      label: `Women's Clothing`,
      value: `women's clothing`,
  },
  {
      label: `Men's Clothing`,
      value: `men's clothing`,
  },
  {
      label: `Jewelery`,
      value: `jewelery`,
  },
  {
      label: `Electronics`,
      value: `electronics`,
  },
]
  
const handleCategoryChange = (e) => {
  const newCategory = e.target.value;
  setcategory(newCategory)

  fetch(`https://fakestoreapi.com/products/category/${newCategory}`)
  .then( (res)=> res.json())
  .then( (data)=> setProducts(data) )
  console.log(category);
}
  return (
    <>
      <SmallBanner />
      <MiddleContent title={Title} description={Description} />
      <Grid container spacing={2} style={{marginTop:'10px', marginBottom: '10px'}}>
      <Grid item xs={4} sm={4} md={ 4 }>
          <TextField
            label='Search'
            fullWidth
            onChange={(text) => searchFilter(text)}
          />
        </Grid>
      <Grid item xs={4} sm={4} md={ 4 }>
        <TextField
          select
          label='Order'
          helperText='Please Select'
          fullWidth
          value={order}
          onChange={changeOrder}
        >
          {
            ascDes.map((option) => 
            <MenuItem key={option.label} value={option.value}> { option.label } </MenuItem>
            )
          }
                       
          </TextField>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
        <TextField
          select
          fullWidth
          label='Category'
          helperText='Please select a category'
          value={category}
          onChange={handleCategoryChange}
        >
          {
            categories.map((category) =>
              <MenuItem key={category.label} value={category.value}> { category.label} </MenuItem>
            )
          }
          </TextField>
        </Grid>
      </Grid>
      <Grid container justifyContent='flex-end' marginY={2}>
        <Grid item>
          <NavLink to='/add'>
            <Button variant='contained'  endIcon={ <AddCircleOutlineIcon/>}>Add </Button>
          </NavLink>
          
        </Grid>
      </Grid>
      <ProductList products={ products }/>
    </>
  )
}

export default Products