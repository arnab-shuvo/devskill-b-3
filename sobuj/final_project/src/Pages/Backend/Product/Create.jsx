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
  const [openCreate, setOpenCreate] = React.useState(false);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  const [title, setTitle]=useState("");
  const [category, setCategory]=useState("");
  const [price, setPrice]=useState("");
  const [stock, setStock]=useState("");
  const [description, setDescription]=useState("");
  const [image, setImage]=useState("");
  const [error, setError]=useState(false);

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyNDdlYTQ5OTgwNjJjNDg0NDgxZmRkOSIsImVtYWlsIjoicmFpaGFuLnNhYnVqQHlhaG9vLmNvbSJ9LCJpYXQiOjE2NDk1NjY0ODYsImV4cCI6MTY0OTczOTI4Nn0.gHOTWrdIentkxTGmBnKhfXMsTDIr5ntPNO7jjBJmUkA";

  const BASE64 = "";

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
        color="secondary"
        sx={{ mt:2 }}
        onClick={handleOpenCreate} 
        >Add Product</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openCreate}
        onClose={handleCloseCreate}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCreate}>
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
                                        <Button sx={{ mt:5, ml:10 }} onClick={()=>{handleCloseCreate()}} >
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
