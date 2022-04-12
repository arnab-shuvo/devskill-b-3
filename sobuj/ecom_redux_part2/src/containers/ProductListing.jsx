import React, { useState , useEffect} from 'react';
import {useSelector} from "react-redux";
import ProductComponent from './ProductComponent';
import axios from 'axios';

const ProductListing = () =>{
    const products = useSelector((state) =>state);

    const fetchProducts = async() =>{
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Err", err);
        });
        console.log(response.data);
    };
    useEffect(()=>{

    }, []);
    console.log(products);
    return(
        <div className='ui grid container'> 
        <ProductComponent />

        </div>
    )
}

export default ProductListing;