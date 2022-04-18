
import axios from 'axios';
import {header} from './api';
/*------------------------ Category------------------------ */

/* Get Category List */
export const getCategoryList= async ()=>{

    try{
        const {data}=await axios.get('http://localhost:8080/category');
        return data;
    }catch (error) {
        return alert(error.message);
    }
        
}

/*Get Category Details*/
export const getCategoryDetails = async (categoryId)=>{    
    try{
        const {data}=await axios.get(`http://localhost:8080/category/${categoryId}`);
        return data;
    }catch (error) {
        return alert(error.message);
    }
        
}

/*Create a Category
Dependency: Require Admin Account */
export const createCategory= async(categoryData,TOKEN)=>{
    header(TOKEN);
    try{
        const {data}=await axios.post(
            'http://localhost:8080/category',
            {
                ...categoryData,
            }  
            );
        return data;
    }catch (error) {
        return alert(error.message);
    }
}

/*Edit a Category
Dependency: Require Admin Account */
export const updateCategory= async(categoryData,TOKEN)=>{
    header(TOKEN);
    try{
        const {data}=await axios.put(
            'http://localhost:8080/category',
            {
                ...categoryData,
            }  
            );
        return data;
    }catch (error) {
        return alert(error.message);
    }
}

/*Delete a Category
Dependency: Require Admin Account */
export const deleteCategoryAPI= async(categoryId,TOKEN)=>{
    header(TOKEN);
    try{
        const {data}=await axios.delete(
            `http://localhost:8080/category/${categoryId}`,
            );
        return console.log(data);
    }catch (error) {
        return alert(error.message);
    }
        
}
