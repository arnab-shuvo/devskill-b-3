import axios from 'axios';
import {header} from './api';
/* Get All Products */
export const getProducts= async ()=>{

    try{
        const {data}=await axios.get('http://localhost:8080/products');
        return data;
    }catch (error) {
        return alert(error.message);
    }
        
}
/*Get a single product */
export const getProduct=async (productId)=>{    
    try{
        const {data}=await axios.get(`http://localhost:8080/products/${productId}`);
        return data;
    }catch (error) {
        return alert(error.message);
    }
        
}


/* Add new product
Dependency: Required Admin User account */
export const createProduct= async(productData,TOKEN)=>{
    try{
        const {data}=await axios.post(
            'https://fakestoreapi.com/products',
            {
                headers: {
                    authorization: `bearer ${TOKEN}`,  
                },
                ...productData,
            }  
            );
        return data;
    }catch (error) {
        return alert(error.message);
    }
}

/* Edit Product 
Dependency: Required Admin User account */
export const updateProduct=async(productId,productData,TOKEN)=>{
    try{
        const {data}=await axios.put(
            `http://localhost:8080/products/${productId}`,
                {
                    headers: {
                        authorization: `bearer ${TOKEN}`,  
                    },
                    ...productData,
                }    
            );
        return data;
    }catch (error) {
        return alert(error.message);
    }
}

/* Delete Product 
Dependency: Required Admin User account */
export const deleteProduct= async(productId,TOKEN)=>{
    try{
        const {data}=await axios.delete(
            `http://localhost:8080/products/${productId}`,
                {
                    headers: {
                        authorization: `bearer ${TOKEN}`,  
                    },
                }
            );
        return data.id;
    }catch (error) {
        return alert(error.message);
    }
        
}
