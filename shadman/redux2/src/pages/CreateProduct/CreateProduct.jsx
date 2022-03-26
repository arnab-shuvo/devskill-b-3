import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'



const CreateProduct = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    };


    useEffect(() => {
        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }, [])

    return (
        <>
            <Container sx={{ pt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item md={8} >
                        <h1>Create Product</h1>
                        <Box sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}
                            noValidate>
                            <TextField style ={{width: '100%'}}
                                id="outlined-error"
                                label="Product Title"
                            />
                            <TextField style ={{width: '100%'}}
                                id="outlined-error"
                                label="Product Category"
                            />
                            <TextField style ={{width: '100%'}} 
                                id="outlined-error"
                                label="Product Price"
                            />
                            <TextField style ={{width: '100%'}}
                                id="outlined-error"
                                label="Product Description"
                            />

                            <Button sx={{ mx: 1, color: "black", display: "block", border: "2px black solid" ,width:300  }}
                                variant="outlined"
                                component="label"
                            >
                                Upload Image
                                <input
                                    type="file"

                                />
                            </Button>
                            <Button variant="contained" sx={{ m: 1, }} onClick={handleClick}>
                                Create Product
                            </Button>
                        </Box>

                    </Grid>
                </Grid>
            </Container>

        </>


    )
}

export default CreateProduct