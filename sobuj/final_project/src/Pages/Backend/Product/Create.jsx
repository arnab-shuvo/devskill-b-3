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
import ImageUploading from 'react-images-uploading';

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



    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
  
    const onChangeImage = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex , '====== ImageList, AddUpdateIndex');
      setImages(imageList);
      console.log(images, '=====Images after onchange')
  
      console.log(imageList[0].data_url, '====== The First Image DataURL Base64 Code...')
      //Setting the First Image's Base64  Code to the State (image)
      setImage(imageList[0].data_url);
    };

    


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
                
                <Box>
                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChangeImage}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <div className="upload__image-wrapper">
                        <button
                          style={isDragging ? { color: 'red' } : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          Click or Drop here
                        </button>
                        &nbsp;
                        <button onClick={onImageRemoveAll}>Remove all images</button>
                        {imageList.map((image, index) => (
                          <div key={index} className="image-item">
                            <img src={image['data_url']} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                              <button onClick={() => onImageUpdate(index)}>Update</button>
                              <button onClick={() => onImageRemove(index)}>Remove</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ImageUploading>
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