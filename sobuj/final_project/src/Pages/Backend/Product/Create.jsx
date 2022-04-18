import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea, CardContent, TextField } from '@mui/material';
import { useState } from 'react';
import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextareaAutosize } from '@material-ui/core';
import BackendLayout from '../../../Layouts/Backend/Layouts';
import { useNavigate } from 'react-router-dom';
import { loadCategories } from '../../../store/action/CategoryAction';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { addProductAction } from '../../../store/action/ProductAction';

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

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 350,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const CreateProduct =()=> {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { categoryList } = useSelector((state) => state.prodCategories); // prodCategories is comming from RootReducer (prodCategories:CategoryReducer,)
    
    const loggedInUser = useSelector((store) =>store.userStore);
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
      dispatch(loadCategories());
      setUserToken(loggedInUser.token.userInfo.token)

    }, []);
    
        
    const [title, setTitle]=useState("");
    const [category, setCategory]=useState("");
    const [price, setPrice]=useState("");
    const [stock, setStock]=useState("");
    const [description, setDescription]=useState("");
    const [image, setImage]=useState("");
    const [error, setError]=useState(false);


async function formSubmit(data) {
    // console.log(data.category, "==== title from formSubmit")
    return fetch("http://localhost:8080/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": "bearer "+ data.userToken
      },
      body: JSON.stringify({
            "title": data.title,
            "price": data.convrtPrice,
            "description": data.description,
            "image": data.image,
            "stock": data.convrtStock,
            "category": {
                    "_id": data.category
                }
        }),
    })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => console.log(json));
  }

const handleFormSubmit = async e =>{
    if (e && e.preventDefault) { e.preventDefault();}
    if(title.length){ 
        const convrtPrice = parseInt(price);
        const convrtStock = parseInt(stock);
        // const token = userInfo.token.userInfo.token;
        const formDispatch = await formSubmit({
            userToken,
        title,
        convrtPrice,
        description,
        image,
        convrtStock,
        category
        });
        dispatch(addProductAction(formDispatch));

        if(formDispatch){
            alert("Product added successfully!")
        }else{
            console.log(formDispatch, "----- Form Dispatch not successful")
        }
        navigate('/admin/manage-product')

    }else{
        setError(true);
    }
  }
/**/
const navigate =useNavigate();
const toManageProduct = () =>{
  navigate('/admin/manage-product');
}


  return (
    <div>
      
          <Grid container>
           <Grid xs={12}>
            <Typography gutterBottom variant="h5" component="h2">
                        Add New Product
                </Typography>
                <Button 
                    variant="contained" 
                    color="secondary"
                    sx={{ mt:2 }}
                    onClick={toManageProduct} 
                    >Manage Products</Button>
           </Grid>

            <Grid xs={12}>
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
                {/* <TextField sx={{ mt:2 }}
                    onChange={(e)=>setCategory(e.target.value)}
                    fullWidth
                        error={error}
                        id="outlined"
                        label="Product Category"                                          
                        helperText={error? "Must fill the task field!":""}
                        variant="outlined"
                    
                        value={category}
                />  */}
                <FormControl className={classes.formControl} error>
                    <InputLabel id="demo-simple-select-error-label">Select Product Category</InputLabel>
                    <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={category}
                            onChange={(e)=>setCategory(e.target.value)}
                            autoWidth
                            label="Category"
                            
                            >
                        {categoryList.map((row) =>(
                                <MenuItem value={row._id}>{row.name}</MenuItem>   
                            ))}
                            
                    </Select>
                    <FormHelperText>Error</FormHelperText>
                </FormControl>
                
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
                </Box> */}
                <Box>
                    <TextareaAutosize  
                        onChange={(e)=>setImage(e.target.value)}
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Image BASE64"
                        style={{ width: "100%", minHeight:"100px" }}
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
            </Grid>

            
            <Button sx={{ mt:5 }} onClick={()=>{handleFormSubmit()}} variant="contained" color="secondary">
                Add Product
            </Button>
            <Button sx={{ mt:5, ml:10 }} onClick={()=>{handleFormSubmit()}} >
                SUBMIT
            </Button>
                                     
          </Grid>
                            
                              
 
    </div>
  );
}

export default BackendLayout(CreateProduct);