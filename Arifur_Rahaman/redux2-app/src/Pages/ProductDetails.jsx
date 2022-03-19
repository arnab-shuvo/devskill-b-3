import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Rating } from '@mui/material';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectedProduct, setProductEdit } from '../Redux/actions/productAction';
import { styled } from '@mui/system';

const MdTitle = styled(Typography)(({ theme }) => ({
    pb: '10px',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}))
const SmTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
}))

const ProductDetails = () => {
    const { id } = useParams();
    const { product } = useSelector(store => store.singleProduct)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { title, price, image, description, category, rating } = product;

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                dispatch(selectedProduct(data));
            })
    }, [])

    const handleEditProduct = ()=>{
        dispatch(setProductEdit({...product}))
        navigate(`../productEdit/${id}`, { replace: true })
    }
    const deleteProduct = (id)=>{ 
        fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                console.log("deleted");
                navigate('/');
            })
    }
    return (
        <>
            {Object.keys(product).length !== 0
                ? <Paper>
                    <Box sx={{ p: '10px' }}>
                        <SmTitle variant='h5'>{title}</SmTitle>
                    </Box>
                    <Grid container
                        spacing={0}
                        direction={{ xs: "column-reverse", md: "row" }}
                        alignItems="center"
                        justifyContent="center"
                        style={{
                            minHeight: '100vh'
                        }}
                    >
                        <Grid item xs={12}
                            md={6}
                            sx={{
                                width: '80%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <Box component='div' style={{ width: '80%' }}>
                                <MdTitle variant='h4' sx={{ pb: '10px' }}>{title}</MdTitle>
                                <Typography sx={{ pb: '30px' }} variant='subtitle1' align='justify'>{description}</Typography>
                                <Typography variant='h6' sx={{ fontWeight: '600', pb: '10px' }}>Category: {category}</Typography>
                                <Rating
                                    sx={{ pb: '10px' }}
                                    readOnly
                                    value={rating.rate}
                                    name="half-rating-read"
                                    defaultValue={2.5}
                                    precision={0.5}
                                />
                                <Typography sx={{ pb: '10px' }}>Price: {price}$</Typography>
                                <Button
                                    variant='contained'
                                    sx={{ mr: '10px' }}
                                    onClick={() => navigate(-1)}
                                >
                                    Go Back
                                </Button>

                                <Button
                                    variant='contained'
                                    sx={{ mr: '10px' }}
                                    onClick={handleEditProduct}
                                >
                                    Edit Product
                                </Button>

                                <Button
                                    variant='contained'
                                    sx={{ mr: '10px' }}
                                    onClick={()=>deleteProduct(id)}
                                >
                                    Delete Product
                                </Button>
                            </Box>

                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={image} alt="" style={{ width: '60%' }} />
                        </Grid>
                    </Grid>
                </Paper>
                : <p>Loading..........</p>
            }
        </>
    );
};

export default ProductDetails;