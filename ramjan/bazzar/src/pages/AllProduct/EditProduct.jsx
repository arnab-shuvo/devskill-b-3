import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import AdminDrawer from '../../components/AdminDrawer/Index';
import basePath from '../../Config/Index';
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
    width: '50%'
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

export default function EditProduct() {
  
  const { id } = useParams();

  const [image64, setImage64] = useState('')
  const [cat, setCat ] = useState('')
  const categoryData = useSelector((store) => store.categoryStore)
  
  const { category } = categoryData;
  
  const singleItem = useSelector((store) => store.singleProductStore)
  
  const { product } = singleItem


  const userData = useSelector((store) => store.userStore)
  const token = userData.token.userInfo.token;
  const store = useSelector((store) => store.productStore)
  const { products } = store;
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [title, setTitle ] = useState(product.title)
  const [price, setPrice ] = useState(0)
  const [description, setDescription ] = useState('')
  const [stock, setStock ] = useState(0)
  const [image, setImage ] = useState('')
  const [categoryID, setCategoryID] = useState('')
  
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


  useEffect(() => {
    getProductDetail()
  }, []);

  const getProductDetail = async () => {
    const res = await fetch(`http://localhost:8080/products/${id}`);
    const singleData = await res.json()
    console.log(singleData);
    console.log(category, '->> category from store');

    setTitle(singleData.title)
    setPrice(singleData.price)
    setDescription(singleData.description)
    setStock(singleData.stock)
    setImage(singleData.image)
    setCategoryID(singleData.category._id)

  }

const submitToUpdateProduct = async (e) => {
  e.preventDefault();
  
  console.log('clicked')
  
  const newData = {
    title       :   title,
    price       :   +price,
    description :   description,
    stock       :   +stock,
    image       :   image,
    category    : {
                _id   : categoryID,
    }  
  }

  console.log(newData, 'new datta')

  let result = await fetch(`http://localhost:8080/products/${id}`, {
  method: "PATCH",
    headers: {
    "Access-Control-Allow-Origin": "http://localhost:8080",
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
          
          <Typography variant='h6' align='center'   style={styles.marginY}> Edit Product </Typography>
          
          <TextField
             
              fullWidth
              style={styles.marginY}
              my={2}
              onChange={(e)=>setTitle(e.target.value)}
              name='title'
              value={title}
              
              
          />
          <TextField
            style={styles.marginY}
                  fullWidth
                  type='number'
            my={2}
            onChange={(e)=>setPrice(e.target.value)}
            name='price'
            value={price}
          />
               
          <TextField
            style={styles.marginY}
            fullWidth
            my={2}
            onChange={(e)=>setDescription(e.target.value)}
            name='description'
            value={description}
          />
          <TextField
            style={styles.marginY}
            type='number'
            fullWidth
            my={2}
            onChange={(e)=>setStock(e.target.value)}
            name='stock'
            value={stock}
          />

          <img src={ basePath + image} alt={product.title} style={useStyle.img} />     
          <TextField
            label='Image'
            style={styles.marginY}
            type='text'
            // type='file'
            fullWidth
            my={2}
            onChange={(e)=>setImage(e.target.value)}
            // onChange={handleInputImage}
            name='image'
                /> 
                
          <TextField
            label='Seleect Category'
            fullWidth
            select
            // onChange={handleInputChange}
            name='categoryID'
            value={categoryID}
          >
                  {category.map((data, index) =>
                    <MenuItem value={data._id} key={index}> {data.name} </MenuItem> 
                  )}
          </TextField>
          <Button variant='contained' fullWidth  style={styles.marginY} onClick={submitToUpdateProduct}> Update </Button>
         
        </Grid>
      </Grid>
            
        
      </Main>
      </Grid>
      </Grid>
    </>
  );
}