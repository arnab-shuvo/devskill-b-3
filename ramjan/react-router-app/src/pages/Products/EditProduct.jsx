import { Button, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function EditProduct() {
    const { id, title } = useParams()
    const [singleProduct, setSingleProduct] = useState('')
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then( (res)=> res.json())
        .then( (data)=> setSingleProduct(data))
    }, [])
    
 const [inputProduct, setInputProduct] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category:''
    })
    
    const handelingInputsEvent = (e) => {
        const { name, value } = e.target  
        setInputProduct({
            ...inputProduct,
            [name] : value
        })
    }
	
    const updateProduct = (e) => {
        e.preventDefault()
        
        fetch('https://fakestoreapi.com/products/7', {
            method:"PUT",
            body:JSON.stringify(inputProduct)
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }

    return (
        <>
            <Grid container marginY={5}>
            <Grid item xs={12} marginY={ 3 }>
            <TextField
                label='Title'
                fullWidth
                required
                helperText='Please Add Title'
                onChange={handelingInputsEvent}
                name='title'
                // value={singleProduct.title}
                />
            </Grid>
            <Grid item xs={12} marginY={ 3 }>
            <TextField
                label='Description'
                fullWidth
                required
                helperText='Please Add Description'
                onChange={handelingInputsEvent}
                name='description'
            />
            </Grid>
            <Grid item xs={12} marginY={ 3 }>
            <TextField
              label='Price'
              fullWidth
              required
              helperText='Please Add Price'
              onChange={handelingInputsEvent}
              name='price' 
                />
            </Grid>
            <Grid item xs={12} marginY={ 3 }>

            <TextField
              label='Image'
              fullWidth
              required
              helperText='Please Add URL'
              onChange={handelingInputsEvent}
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
                onChange={handelingInputsEvent}
                  
                />
                   
            </Grid>
            <Grid item xs={12} marginY={3}>
                    <Button variant='contained' onClick={updateProduct}> Submit </Button>
            </Grid>
          
    </Grid>
        </>
    )

}

export default EditProduct