import axios from 'axios';
import {header} from './api';

/*Get Cart
Dependency: Require User Authentication */
export const getCart= async (TOKEN)=>{
    header(TOKEN);
    try{
        const {data}=await axios.get('http://localhost:8080/cart',
        );
        return data;
    }catch (error) {
        return alert(error.message);
    }
        
}
/*Add To Cart
Dependency: Require User Authentication */
export const addToCartAPI= async(productData,TOKEN)=>{
    header(TOKEN);
    try{
        const {data}=await axios.post(
            'http://localhost:8080/cart',
            {
                product:{
                ...productData,
                    },
            }  
            );
        return data;
    }catch (error) {
        return alert(error.message);
    }
}
