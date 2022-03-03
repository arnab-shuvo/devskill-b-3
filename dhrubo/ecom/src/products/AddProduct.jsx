import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import axios from 'axios'; 

export default function AddProduct({childToParent}, props) {
    const intialValues = {title: "", description:"", price:"", image:"", category:""};
    const [product, setProduct] = useState(intialValues);
    const [formErrors, setFromErrors] = useState({}); 
    const [isSubmit, setIsSubmit] = useState(false); 

    const handleChange = (e) => {
      const {name, value} = e.target; 

      setProduct({ ...product, [name]: value}); 
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setFromErrors(validate(product));
        setIsSubmit(true); 
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 ){
        
          try {
            const response = axios.post(`https://fakestoreapi.com/products`, product);
            setIsSubmit(true); 
            console.log(response);
            console.log("done"); 
            alert("Product submitted successfully");
            childToParent(false)
  
          } catch (error) {
            console.log("something is wrong"); 
          }
        }
        
      };
      
    
    const validate = (values) =>{
      const errors = {}
      if(! values.title){
        errors.title = "Product Name is Required"
      }
      if(! values.description){
        errors.description ='Product description is required'; 
      }
      if(! values.price){
        errors.price = 'Product price is required'; 
      }
      if(! values.image){
        errors.image = 'Product image is required'; 
      }
      if(! values.category){
        errors.category = 'Product category is required'; 
      }
      return errors;
    }

    


    // useEffect(() => {
    //   if(Object.keys(formErrors).length === 0 && isSubmit ){
    //     console.log(formErrors);

    //     fetch('https://fakestoreapi.com/products',{
    //         method:"POST",
    //         body:JSON.stringify()
            
    //     })
    //         .then(res=>res.json())
    //         .then(json=>console.log(json))
    //   }
    // },[formErrors, isSubmit]);
    
    
      
  return (
    <div>
        <Dialog open={true} >
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill all field. All fileds are mandetory. 
          </DialogContentText>
          <div>
                <p>{formErrors.title}</p>
                <TextField
                error
                id="filled-error"
                label="Product Title"
                variant="filled"
                value={product.title}
                onChange={handleChange}
                name="title"
                />
                <p>{formErrors.description}</p>
                <TextField
                error
                id="filled-error"
                label="Product Descripition"
                variant="filled"
                value={product.description}
                onChange={handleChange}
                name="description"
                />
                <p>{formErrors.price}</p>
                <TextField
                error
                id="filled-error"
                label="Product Price"
                variant="filled"
                value={product.price}
                onChange={handleChange}
                name="price"
                />
                <p>{formErrors.image}</p>
                <TextField
                error
                id="filled-error"
                label="Product Image"
                variant="filled"
                value={product.image}
                onChange={handleChange}
                name="image"
                />
                
                <p>{formErrors.category}</p>
                <TextField
                error
                id="filled-error"
                label="Product Category"
                variant="filled"
                value={product.category}
                onChange={handleChange}
                name="category"
                />
                
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => childToParent(false)}>Cancel</Button>
          <Button onClick={handleSubmit}>Save Product</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}
