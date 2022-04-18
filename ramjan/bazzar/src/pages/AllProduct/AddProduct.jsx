import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import AdminDrawer from '../../components/AdminDrawer/Index';
import { setNewProductAction } from '../../store/actions/AddProductAction/Index';
import { getAllCategoryAction } from '../../store/actions/CategoryAction/Index';
import { getProductListAction } from '../../store/actions/ProductAction/Index';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const useStyle = {
  img: {
    width: '40px'
  },
  marginY: {
    marginTop: '10px',
    marginBottom: '10px'
  }
}

const styles = {
  marginY: {
    marginTop: '10px',
    marginBottom : '10px'
  },
  gridShadow: {
    border: '1px solid gray',
    padding: '10px'
  },
  logoCenter: {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '50%'
  }
}

export default function AddProduct() {
  const [image64, setImage64] = useState('')
  const [cat, setCat ] = useState('')
  const categoryData = useSelector((store) => store.categoryStore)
  const { category } = categoryData;
  console.log(category)

  const userData = useSelector((store) => store.userStore)
  const token = userData.token.userInfo.token;
  const store = useSelector((store) => store.productStore)
  const { products } = store;
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const handleInputImage = (e) => {
  //   const filePath = e.target.files[0].name;

  //   imageToBase64('filePath') 
  //   .then(
  //       (response) => {
  //       setImage64(response); 
  //       }
  //   )
  //   .catch(
  //       (error) => {
  //           console.log(error); 
  //       }
  //   )
  // }


  const [addNewProduct, setAddNewProduct] = useState({
    title: '',
    price:'',
    description: '',
    stock:'',
    image:'',
    categoryID :''
  })

  
  useEffect(() => {
    dispatch(getProductListAction())
  }, []);


    
useEffect(() => {
  dispatch(getAllCategoryAction());
}, []);

  
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  const handleInputChange = async (e) => {
    
    const { name, value } = await e.target
    setAddNewProduct({
      ...addNewProduct,
        [name] : value
     
      
    })          
  }

const submitToAddProduct = async (e) => {
  e.preventDefault();
  
  console.log(addNewProduct)
  
  const newData = {
    title       :   addNewProduct.title,
    price       :   +addNewProduct.price,
    description :   addNewProduct.description,
    stock       :   +addNewProduct.stock,
    image       :   addNewProduct.image,
    category    : {
                _id   : addNewProduct.categoryID,
    }  
  }

  console.log(newData, 'new datta')

  let result = await fetch('http://localhost:8080/products', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    'Authorization': `bearer ${token}`, 
  },
  body: JSON.stringify(newData)
  });

  result = await result.json();
  console.log(result);
  dispatch(setNewProductAction(result))
  navigate('/allproduct');      
}



  

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <AdminDrawer />
        </Grid>
        
        <Grid item xs={12} sm={8} md={8}>
        <Main open={open}>
            <DrawerHeader />
            {/* <Button mb={ 2 } variant="outlined" startIcon={<AddCircleOutlineIcon />}>Add Product</Button> */}
            <Grid
        container
        justifyContent="center"
        alignItems="center"
        my={5}
      >
        <Grid item xs={8} sm={8} md={8} style={styles.gridShadow}>
          
          <Typography variant='h6' align='center'   style={styles.marginY}> Add Product </Typography>
          
          <TextField
              label='Title'
              fullWidth
              style={styles.marginY}
              my={2}
              onChange={handleInputChange}
              name='title' 
          />
          <TextField
            label='Price'
            type="number" 
            style={styles.marginY}
            fullWidth
            my={2}
            onChange={handleInputChange}
            name='price'
          />
               
          <TextField
            label='Description'
            style={styles.marginY}
            type='text'
            fullWidth
            my={2}
            onChange={handleInputChange}
            name='description'
          />
          <TextField
            label='Stock'
            style={styles.marginY}
            type='number'
            fullWidth
            my={2}
            onChange={handleInputChange}
            name='stock'
          />
               
          <TextField
            label='Image'
            style={styles.marginY}
            type='text'
            // type='file'
            fullWidth
            my={2}
            onChange={handleInputChange}
            // onChange={handleInputImage}
            name='image'
                /> 
                
          <TextField
            label='Seleect Category'
            fullWidth
            select
            onChange={handleInputChange}
            name='categoryID'
            value={addNewProduct.categoryID}
          >
                  {category.map((data, index) =>
                    <MenuItem value={ data._id} key={index}> { data.name} </MenuItem>
                  )}
             
              
            
          </TextField>
          
                
         
          <Button variant='contained' fullWidth  style={styles.marginY} onClick={submitToAddProduct}> Add </Button>
         
        </Grid>
      </Grid>
            
        
      </Main>
      </Grid>
      </Grid>
    </>
  );
}