import React,{useState} from 'react';
import { updateProduct } from '../../utills/api';
import { workB } from '../../component/middleware/middleware';
import ProductForm from '../../component/Form/productForm';
import {useNavigate,useParams} from 'react-router-dom';

const UpdateProduct=()=>{
    const [inputs, setInputs] = useState({});
    const navigate=useNavigate();
    const {productId}=useParams();
    console.log(productId);
    const toProduct=()=>{
      navigate('/Product');
    }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values) => {
            return{
                ...values,
                 [name]: value
                };
            }
        );
      }
    
      const handleSubmit =  (e) => {
        e.preventDefault();
        const chooseFunction= updateProduct(productId,inputs);
        workB(chooseFunction);
        toProduct();
      }

    return(
        <>
        <ProductForm inputs={inputs}handleChange={handleChange}handleSubmit={handleSubmit}/>
        </>
    );
}
export default UpdateProduct;