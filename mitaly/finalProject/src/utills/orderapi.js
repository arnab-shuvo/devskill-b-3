import axios from 'axios';
import {header} from './api';

/*Get all order List
Dependency: Require Admin Authentication */
export const getOrderLists= async (TOKEN)=>{
   header(TOKEN);
    try{
        const {data}=await axios.get('http://localhost:8080/order',
        );
        return data;
    }catch (error) {
        return alert(error.message);
    }
        
}

/*Get My order List
Dependency: Require User Authentication */
export const getOrderList= async (TOKEN)=>{
    header(TOKEN);
    try{
        const {data}=await axios.get('http://localhost:8080/my-order',
        {
            headers: {
                authorization: `bearer ${TOKEN}`,  
            },
        }
        );
        return data;
    }catch (error) {
        return alert(error.message);
    }
        
}
/*Checkout a Cart
Dependency: Require User Authentication */
export const checkoutCartAPI= async (TOKEN)=>{
    header(TOKEN);
    try{
        const {data}=await axios.get('http://localhost:8080/order/checkout',

        );
        return data;
    }catch (error) {
        return alert(error.message);
    }
        
}