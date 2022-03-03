import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@material-ui/core";
import axios from 'axios';

export default function EditProducts({onClose, product} ) {
    
  const {id} = product.id; 
  const [currentProduct, setCurrentProduct] = useState({
    id: "",
    title: "", 
    description: "", 
    price:"", 
    category:""
  })


  useEffect(() => {
    async function getProduct() {
      try {
        const Apiproduct = await axios.get(`https://fakestoreapi.com/products/${product.id}`)
        setCurrentProduct(Apiproduct.data); 
      } catch (error) {
        console.log("something is wrong");
      }
    }
    getProduct(); 
  }, [product.id])

  const editProductChange = (e) => {
    setCurrentProduct({... product, [e.target.name]: e.target.value}); 
  }

  async function onFormSubmit(e){
    e.preventDefault()
    try {
      const response = await axios.post(`https://fakestoreapi.com/products`,product.id); 
      console.log(response);
      onClose(false)
    } catch (error) {
      console.log("Something is wrong")
    }
  }

  



  const intialProductState = {
    id: product.id,
    title: product.title, 
    description:product.description, 
    price: product.image, 
    category:product.category
  };

    const [formErrors, setFromErrors] = useState({}); 
    const [open, setOpen] = useState(true);
    const [updatedProduct, setUpdatedProduct] = useState();
       

    const handleChange = (e) => {
      const {name, value} = e.target; 

      setUpdatedProduct({ ...product, [name]: value}); 
    }
    
  return (

            <div>
        <Dialog open={open}>
        <DialogTitle>Edit Product</DialogTitle>
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
                value={currentProduct.title}
                onChange={editProductChange}
                name="title"
                />
                <p>{formErrors.description}</p>
                <TextField
                error
                id="filled-error"
                label="Product Descripition"
                variant="filled"
                value={currentProduct.description}
                onChange={e =>editProductChange(e)}
                name="description"
                />
                <p>{formErrors.price}</p>
                <TextField
                error
                id="filled-error"
                label="Product Price"
                variant="filled"
                value={currentProduct.price}
                onChange={e =>editProductChange(e)}
                name="price"
                />
                <p>{formErrors.image}</p>
                <TextField
                error
                id="filled-error"
                label="Product Url"
                variant="filled"
                value={currentProduct.image}
                onChange={e =>editProductChange(e)}
                name="image"
                />
                
                <p>{formErrors.category}</p>
                <TextField
                error
                id="filled-error"
                label="Product Category"
                variant="filled"
                value={currentProduct.category}
                onChange={e =>editProductChange(e)}
                name="category"
                />
                
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose(false)}>Cancel</Button>
          <Button onClick={e => onFormSubmit(e)}>Update Product</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

