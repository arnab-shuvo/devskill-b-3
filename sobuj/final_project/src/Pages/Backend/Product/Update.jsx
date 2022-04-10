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

const UpdateProduct=({product, openModal, handleClose})=> {

  const [title, setTitle]=useState("");
  const [category, setCategory]=useState("");
  const [price, setPrice]=useState("");
  const [description, setDescription]=useState("");
  const [image, setImage]=useState("");
  const [error, setError]=useState(false);


  const editProduct = () =>{
    if(title.length){ 
        alert(title + ', ' + category + ', ' + price + ', '+ description );
        fetch(`http://127.0.0.1:8080/products/${product._id}`,{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: title,
                    price: price,
                    description: description,
                    image:image,
                    category: {
                        title:category,
                        _id:category // should be categoryID
                    }
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }else{
        setError(true);
    }
};

  return (
    <div>
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
          <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Update Product
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
                                            
                                                value={product.title}
                                        />
                                        <TextField sx={{ mt:2 }}
                                            onChange={(e)=>setCategory(e.target.value)}
                                            fullWidth
                                                error={error}
                                                id="outlined"
                                                label="Product Category"                                          
                                                helperText={error? "Must fill the task field!":""}
                                                variant="outlined"
                                            
                                                value={product.category}
                                        /> 
                                        <TextField sx={{ mt:2}}
                                            onChange={(e)=>setPrice(e.target.value)}
                                            fullWidth
                                                error={error}
                                                id="outlined"
                                                label="Price"                                          
                                                helperText={error? "Must fill the task field!":""}
                                                variant="outlined"
                                            
                                                value={product.price}
                                        /> 
                                         
                                       <Box sx={{ mt:2, mb:2, lineHeight:4, border:"1px solid #ccc", borderRadius:"5px" }}>
                                        <input
                                        accept="image/*"
                                        onChange={(e)=>setImage(e.target.value)}
                                        style={{ display: 'none' }}
                                        id="raised-button-file"
                                        multiple
                                        type="file"
                                        // value={description}
                                        />
                                        <label htmlFor="raised-button-file">
                                        <Button variant="raised" component="span" >
                                            Image Upload
                                        </Button>
                                        </label> 
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
                                                value={product.description}
                                            />
                                        </Box>
                                        
                                    </Box>
                                        <Button sx={{ mt:5 }} onClick={()=>{editProduct()}} variant="contained" color="secondary">
                                           Update
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
export default UpdateProduct;