import { Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setCategoryList } from '../../store/actions/CategoryAction/Index'
import { getProductListAction } from '../../store/actions/ProductAction/Index'

const styles = {
    img: {
        width: '90%'
    }
}

function TopCategories() {
    const dispatch = useDispatch()
    const store = useSelector((store) => store.productStore)
    const categoryList = useSelector((store) => store.categoryStore)

    const basePath = 'http://localhost:8080';

    const { products } = store
    const { category } = categoryList
    
    useEffect( () => {
        dispatch(getProductListAction())
      }, []);


    useEffect(() => {
    
        fetch(`http://localhost:8080/category`)
          .then((res)=> res.json())
          .then( json => {
            dispatch(setCategoryList(json));
          })
        
    }, []);
    
    // const count = products.filter(item => item.price == 125 ).length; // 6
    // console.log(count)
    const categoryLink = 'category/'
    
    return (
        <>
            <Typography variant='h3'> Top Categories  </Typography>
            <Grid container spacing={1} style={{backgroundColor:'#f3f3f3'}} my={2} py={2}> 
                {
                    category.map((TopCategory, index) =>                             
                    <Grid item sm={ 4 } display='flex' justifyContent='space-between' alignItems='center' key={index}>
                        <NavLink to={categoryLink+TopCategory._id}>
                        <Grid item sm={12}>
                            <Stack variant='h6' textAlign='center'> {TopCategory.name} </Stack> 
                            <Stack variant='caption' textAlign='center'>
                                    {products.filter(item => item.category.name === TopCategory.name).length}
                            </Stack> 
                        </Grid>
                          
                        <Grid item sm={12}>
                            <img src={basePath+TopCategory.image} alt={category.title} style={ styles.img}/>
                        </Grid>
                        </NavLink>  
                    </Grid>
                   
                    )
                }       
            </Grid>
        </>
  )
}

export default TopCategories