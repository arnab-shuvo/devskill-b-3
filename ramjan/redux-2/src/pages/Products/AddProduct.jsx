import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

function AddProduct() {

    const [inputProduct, setInputProduct] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category:''
    })
    
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInputProduct({
            ...inputProduct,
            [name] : value
        })          
    }
    
 
    const submitProduct = (e) => {
        e.preventDefault();
        
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(inputProduct)
        })
            .then(res=>res.json())
            .then(json => alert(json))
        
           
    }
    return (
      <Grid container marginY={5}>
            <Grid item xs={12} marginY={ 3 }>
            <TextField
              label='Title'
              fullWidth
              required
              helperText='Please Add Title'
              onChange={handleInputChange}
              name='title' 
                />
            </Grid>
            <Grid item xs={12} marginY={ 3 }>
            <TextField
                label='Description'
                fullWidth
                required
                helperText='Please Add Description'
                onChange={handleInputChange}
                name='description'

                />
            </Grid>
            <Grid item xs={12} marginY={ 3 }>
            <TextField
              label='Price'
              fullWidth
              required
              helperText='Please Add Price'
              onChange={handleInputChange}
              name='price' 
                />
            </Grid>
            <Grid item xs={12} marginY={ 3 }>

            <TextField
              label='Image'
              fullWidth
              required
              helperText='Please Add URL'
              onChange={handleInputChange}
              name='image' 
                />
            </Grid>
            <Grid item xs={12} marginY={ 3 }>
            <TextField
                label='Category'
                fullWidth
                required
               
                helperText='Please Add Category'
                name='category'
                onChange={handleInputChange}
                  
                />
                   
            </Grid>
            <Grid item xs={12} marginY={3}>
                    <Button variant='contained' onClick={submitProduct}> Submit </Button>
            </Grid>
          
    </Grid>
  )
}

export default AddProduct