import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea, CardContent, TextField } from '@mui/material';
import { useState } from 'react';
import { TextareaAutosize } from '@material-ui/core';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateProduct() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle]=useState("");
  const [category, setCategory]=useState("");
  const [price, setPrice]=useState("");
  const [stock, setStock]=useState("");
  const [description, setDescription]=useState("");
  const [image, setImage]=useState("");
  const [error, setError]=useState(false);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyNDdlYTQ5OTgwNjJjNDg0NDgxZmRkOSIsImVtYWlsIjoicmFpaGFuLnNhYnVqQHlhaG9vLmNvbSJ9LCJpYXQiOjE2NDk1NjY0ODYsImV4cCI6MTY0OTczOTI4Nn0.gHOTWrdIentkxTGmBnKhfXMsTDIr5ntPNO7jjBJmUkA";

  const BASE64 = "data:image/webp;base64,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";

  const addProduct = () =>{
    if(title.length){ 
        alert(title + ', ' + category + ', ' + stock +','+ price + ', '+ description );
        
        fetch("http://127.0.0.1:8080/products/", {
            method: "POST",
            headers: {
                authorization: `bearer ${token}`,
            },
            body: JSON.stringify({
                title: title,
                price: price,
                description: description,
                image: BASE64,
                stock: stock,
                category: {
                    _id: "624530e0fa9ad4199cbfa67e",
                },
            }),
        })
        .then((res) => res.json())
        .then((json) => console.log(json));
    }else{
        setError(true);
    }
};

  return (
    <div>
      <Button 
        variant="contained" 
        color="primary"
        sx={{ mt:2 }}
        onClick={handleOpen} 
        >Add Product</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Add New Product
                            </Typography>
                                    <>
                                    <Box>
                                        <TextField sx={{ mt:2 }}
                                            onChange={(e)=>setTitle(e.target.value)}
                                            fullWidth
                                                error={error}
                                                id="outlined"
                                                label="Product Name"                                          
                                                helperText={error? "Must fill the task field!":""}
                                                variant="outlined"
                                            
                                                value={title}
                                        />
                                        <TextField sx={{ mt:2 }}
                                            onChange={(e)=>setCategory(e.target.value)}
                                            fullWidth
                                                error={error}
                                                id="outlined"
                                                label="Product Category"                                          
                                                helperText={error? "Must fill the task field!":""}
                                                variant="outlined"
                                            
                                                value={category}
                                        /> 
                                        <TextField sx={{ mt:2}}
                                            onChange={(e)=>setPrice(e.target.value)}
                                            fullWidth
                                                error={error}
                                                id="outlined"
                                                label="Price"                                          
                                                helperText={error? "Must fill the task field!":""}
                                                variant="outlined"
                                            
                                                value={price}
                                        /> 
                                        <TextField sx={{ mt:2}}
                                            onChange={(e)=>setStock(e.target.value)}
                                            fullWidth
                                                error={error}
                                                id="outlined"
                                                label="Stock"                                          
                                                helperText={error? "Must fill the task field!":""}
                                                variant="outlined"
                                                value={stock}
                                        /> 
                                         
                                       {/* <Box sx={{ mt:2, mb:2, lineHeight:4, border:"1px solid #ccc", borderRadius:"5px" }}>
                                        <input
                                        accept="image/*"
                                        onChange={(e)=>setImage(e.target.value)}
                                        style={{ display: 'none' }}
                                        id="raised-button-file"
                                        multiple
                                        type="file"
                                        
                                        /> 
                                        <label htmlFor="raised-button-file">
                                        <Button variant="raised" component="span" >
                                            Image Upload
                                        </Button>
                                        </label> 
                                        </Box>*/}
                                        <Box>
                                            <TextareaAutosize  
                                                onChange={(e)=>setImage(e.target.value)}
                                                aria-label="minimum height"
                                                minRows={3}
                                                placeholder="Image BASE64"
                                                style={{ width: "100%" }}
                                                label="Image BASE64 CODE"                                          
                                                helperText={error? "Must fill the task field!":""}
                                                variant="outlined"
                                                value={image}
                                            />
                                        </Box>
                                        <Box>
                                            <TextareaAutosize  
                                                onChange={(e)=>setDescription(e.target.value)}
                                                aria-label="minimum height"
                                                minRows={3}
                                                placeholder="Product Description"
                                                style={{ width: "100%" }}
                                                label="Product Name"                                          
                                                helperText={error? "Must fill the task field!":""}
                                                variant="outlined"
                                                value={description}
                                            />
                                        </Box>
                                        
                                    </Box>
                                        <Button sx={{ mt:5 }} onClick={()=>{addProduct()}} variant="contained" color="secondary">
                                            Add Product
                                        </Button>
                                        <Button sx={{ mt:5, ml:10 }} onClick={()=>{handleClose()}} >
                                            Close
                                        </Button>
                                    </>
                              

                        </CardContent>
                    </CardActionArea>
                     
                </Card>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
