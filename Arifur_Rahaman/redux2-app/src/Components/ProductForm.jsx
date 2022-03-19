import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProductEdit } from '../Redux/actions/productAction';

const ProductForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const product_to_be_edited = useSelector(store => store.productEdit.product);
    const [ProductUpdate, setProductUpdate] = useState({ ...product_to_be_edited });

    const handleInputChange = (e) => {
        const newProduct = { ...ProductUpdate };
        newProduct[e.target.name] = e.target.value;
        setProductUpdate({ ...newProduct })
    }
    const updateProduct = () => {
        fetch(`https://fakestoreapi.com/products/${ProductUpdate.id}`, {
            method: "PUT",
            body: JSON.stringify(
                ProductUpdate
            )
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                dispatch(setProductEdit({}));
                setProductUpdate({});
                navigate("/")
                console.log('Updated')

            })
    }

    const addProduct= ()=>{
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(ProductUpdate)
        })
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                console.log("added")
                setProductUpdate({});
                navigate('/');
            })
    }

    const handleFromSubmit = (e) => {
        if(Object.keys(product_to_be_edited).length > 0)
            updateProduct();
        else
            addProduct();
        e.preventDefault()
    }
    return (
        <Container>
            <Paper sx={{ p: '20px', mt: '20px' }}>
                <form action="" onSubmit={handleFromSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Title"
                                value={ProductUpdate.title ? ProductUpdate.title : ''}
                                name='title'
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Description"
                                value={ProductUpdate.description ? ProductUpdate.description : ''}
                                name='description'
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Category"
                                value={ProductUpdate.category ? ProductUpdate.category : ''}
                                name='category'
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Price"
                                value={ProductUpdate.price ? ProductUpdate.price : ''}
                                name='price'
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Image URL"
                                value={ProductUpdate.image ? ProductUpdate.image : ''}
                                name='image'
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <Button
                                type='submit'
                                variant='contained'
                                sx={{
                                    width: '200px'
                                }}
                            >
                                {Object.keys(product_to_be_edited).length > 0 ? "Update" : "Add"}
                            </Button>

                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default ProductForm;