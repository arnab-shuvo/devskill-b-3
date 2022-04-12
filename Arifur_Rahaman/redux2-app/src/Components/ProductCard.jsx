import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Rating } from '@mui/material';
import { Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {id,image, title,rating, price} = product;
    const navigate = useNavigate()
    return (
            <Paper elevation={8}
                sx={{
                    p: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <Stack
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                        height: '100%'
                    }}
                >
                    <img style={{ width: '80%' }} src={image} alt='' />
                </Stack>
                <Stack>
                    <Typography variant='h6' sx={{ fontWeight: '600' }}>{title}</Typography>
                    <Rating
                        sx={{ pb: '10px' }}
                        readOnly
                        value={rating.rate}
                        name="half-rating-read"
                        defaultValue={2.5}
                        precision={0.5}
                    />
                    <Typography variant='subtitle1' sx={{ fontWeight: '600' }}>{price}$</Typography>
                    <Button
                        variant='contained'
                        onClick={() => navigate(`productDetails/${id}`)}
                    >
                        Details
                    </Button>
                </Stack>
            </Paper>
    );
};

export default ProductCard;