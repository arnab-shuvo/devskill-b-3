import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom'



const UpdateProduct = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/products/${id}`)
    };


    useEffect(() => {
        const updateProduct = () => {
            fetch(`https://fakestoreapi.com/products/${id}`, {
                method: "PUT",
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
        }
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await response.json())
            setLoading(false)
        }

        updateProduct()
        getProduct()

    }, [id])

    const Loading = () => {
        return <>

            <h1>Loading...</h1>
        </>
    }

    const Show = () => {
        return <>
            <Container sx={{ pt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item md={8} >
                        <h1>Update Product</h1>
                        <Box sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}
                            noValidate>
                            <TextField style ={{width: '100%'}}
                                id="outlined-error"
                                label="Product Name"
                                defaultValue={product?.title}
                            />
                            <TextField style ={{width: '100%'}}
                                id="outlined-error"
                                label="Product Category"
                                defaultValue={product?.category}
                            />
                            <TextField style ={{width: '100%'}}
                                id="outlined-error"
                                label="Product Price"
                                defaultValue={product?.price}
                            />
                            <TextField style ={{width: '100%'}}
                                id="outlined-error"
                                label="Product Description"
                                defaultValue={product?.description}
                            />

                            <Button sx={{ mx: 1, color: "black", display: "block", border: "2px black solid", width:300 }}
                                variant="outlined"
                                component="label"
                            >
                                Upload Image
                                <input
                                    type="file"

                                />
                            </Button>
                            <Button variant="contained" sx={{ m: 1, }} onClick={handleClick}>
                                Update Product
                            </Button>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </>

    }

    return (
        <div>

            {
                loading ? <Loading /> : <Show />
            }

        </div>
    )
}

export default UpdateProduct