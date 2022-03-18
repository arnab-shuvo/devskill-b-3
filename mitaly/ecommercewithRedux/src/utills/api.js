import axios from 'axios';

export const getProducts= async ()=>{
    /*try{
    axios
    .get('https://fakestoreapi.com/products/7')
    .then ((response)=>{
        return response.data;
    })
    
    } catch (error) {
        return alert(error.message);
    }*/
    /*fetch('https://fakestoreapi.com/products')
    .then((res)=>{ return res.json()})
    .then((data)=>{
        return data;
    })*/
    try{
        const {data}=await axios.get('https://fakestoreapi.com/products');
        return data;
    }catch (error) {
        return alert(error.message);
    }
        
}
export const getProduct=async (productId)=>{    
    try{
        const {data}=await axios.get(`https://fakestoreapi.com/products/${productId}`);
        return data;
    }catch (error) {
        return alert(error.message);
    }
        
}
export const getProductByLimit= async ()=>{
    try{
        const {data}=await axios.get('https://fakestoreapi.com/products?limit=4');
        return data;
    }catch (error) {
        return alert(error.message);
    }
}
export const getAllCategories= async ()=>{
    try{
        const {data}=await axios.get(
            'https://fakestoreapi.com/products/categories');
        return data;
    }catch (error) {
        return alert(error.message);
    }
}
export const getProductByCategory= async(productCategory)=>{
    try{
        const {data}=await axios.get(
            `https://fakestoreapi.com/products/category/${productCategory}`);
        return data;
    }catch (error) {
        return alert(error.message);
    }
}
export const sortProduct= async(sortOption)=>{
    try{
        const {data}=await axios.get(`https://fakestoreapi.com/products?sort=${sortOption}`);
        return data;
    }catch (error) {
        return alert(error.message);
    }
}
export const createProduct= async(productData)=>{
    try{
        const {data}=await axios.post(
            'https://fakestoreapi.com/products',
            {
                ...productData,
            }  
            );
        return data;
    }catch (error) {
        return alert(error.message);
    }
}
export const updateProduct=async(productId,productData)=>{
    try{
        const {data}=await axios.put(
            `https://fakestoreapi.com/products/${productId}`,
                {
                    ...productData,
                }    
            );
        return data;
    }catch (error) {
        return alert(error.message);
    }
}
export const deleteProduct= async(productId)=>{
    try{
        const {data}=await axios.delete(
            `https://fakestoreapi.com/products/${productId}`
            );
        return data.id;
    }catch (error) {
        return alert(error.message);
    }
        
}