import { Stack } from '@mui/material';
import React from 'react';
import loader_img from '../assets/images/loader_img.gif'
const Loader = () => {
    return (
        <Stack  justifyContent='center' alignItems='center' style={{width:'100%', height: '100vh'}}>
            <img src={loader_img} alt='' style={{width:'20%'}}/>
        </Stack>
    );
};

export default Loader;