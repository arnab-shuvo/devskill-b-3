import React,{useState,useEffect} from 'react';

import { createProduct } from '../../utills/api';
import { workB } from '../../component/middleware/middleware';
import ProductForm from '../../component/Form/productForm';
const CreateProduct=()=>{

    const [inputs, setInputs] = useState({});

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
        const chooseFunction= createProduct(inputs);
        workB(chooseFunction);
        alert('Product Created Succesfully');
      }

    return(
        <>
        <ProductForm inputs={inputs}handleChange={handleChange}handleSubmit={handleSubmit}/>
        </>
    );
}
export default CreateProduct;