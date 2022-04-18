import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import AdminDrawer from '../../components/AdminDrawer/Index';
import { getUserAction } from '../../store/actions/AllUserAction/Index';
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

export default function EditUser() {
  
  const { id } = useParams();
  
  const [image64, setImage64] = useState('')
  const [cat, setCat ] = useState('')
  const categoryData = useSelector((store) => store.categoryStore)
  const allUser = useSelector((store) => store.allUserStore)
  const { Users } = allUser;
  
  const { category } = categoryData;

  const singleItem = useSelector((store) => store.singleProductStore)
  
  const { product } = singleItem


  const userData = useSelector((store) => store.userStore)
  const token = userData.token.userInfo.token;
  const store = useSelector((store) => store.productStore)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [username, setUsername ] = useState('')
  const [email, setEmail ] = useState('')
  const [role, setRole ] = useState('')
  const [password, setPassword ] = useState('')
  const [phone, setPhone ] = useState(0)
  const [city, setCity ] = useState('')
  const [street, setStreet ] = useState('')
  const [number, setNumber ] = useState('')
  const [zipcode, setZipcode ] = useState('')
  
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
    getUserDetail()
  }, []);


  const getUserDetail = async () => {
   
    let result = await fetch(`http://localhost:8080/user/${id}`, {
    method: "GET",
    headers: {
    "Access-Control-Allow-Origin": "http://localhost:8080",
    "Content-Type": "application/json",
    "Accept": "application/json",
    'Authorization': `bearer ${token}`, 
    },
  });


    const singleData = await result.json()
    
    console.log(singleData, 'Single UserData');

    setUsername(singleData.username)
    setEmail(singleData.email)
    setPassword(singleData.password)
    setPhone(singleData.phone)
    setCity(singleData.address.city)
    setStreet(singleData.address.street)
    setNumber(singleData.address.number)
    setZipcode(singleData.address.zipcode)
  }

const submitToUpdateUserInfo = async (e) => {
  e.preventDefault();
  
  console.log('clicked')
  
  const newData = {
    username        :   username,
    email           :   email,
    password        :   password,
    role            :   role,
    phone           :   phone,
    address: {
      geolocation: {
        lat: "0",
        long: "0"
      },
      city: city,
      street: street,
      number: number,
      zipcode: zipcode,
    },
  }

  console.log(newData, 'new datta')

  let result = await fetch(`http://localhost:8080/user/${id}`, {
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

  dispatch(getUserAction(token))
  navigate('/Users');      
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
          
          <Typography variant='h6' align='center'   style={styles.marginY}> Edit UserInfo </Typography>
          
          <TextField
              label='User Name'
              fullWidth
              style={styles.marginY}
              my={2}
              onChange={(e)=>setUsername(e.target.value)}
              name='username'
                  value={username}
                  disabled
          />
           
          <TextField
            label='Email'
            style={styles.marginY}
            fullWidth
            my={2}
            onChange={(e)=>setEmail(e.target.value)}
            name='email'
            value={email}
           />
          
          <TextField
            label='Password'
            name='password'
            type='password'
            onChange={(e)=>setPassword(e.target.value)}     
            style={styles.marginY}
            fullWidth
            my={2}
            value={password}
                />

            <TextField
            label='Seleect Category'
            fullWidth
            select
            onChange={(e)=>setRole(e.target.value)}     
            name='categoryID'
            value={role}
          >
                 
           <MenuItem value='admin'> Admin  </MenuItem> 
           <MenuItem value='user'> User  </MenuItem> 
                
            </TextField>
                
          <TextField
            label='Phone'
            name='phone'
            type='text'
            onChange={(e)=>setPhone(e.target.value)} 
            style={styles.marginY}
            fullWidth
                  my={2}
                  value={phone}
          />
          <TextField
            label='city'
            name='city'
                  type='text'
                  onChange={(e)=>setCity(e.target.value)} 
            style={styles.marginY}
            fullWidth
                  my={2}
                  value={city}
          />
          <TextField
            label='street'
            name='street'
                  type='text'
                  onChange={(e)=>setStreet(e.target.value)} 
            style={styles.marginY}
            fullWidth
                  my={2}
                  value={street}
          />
          <TextField
            label='Street number'
            name='number'
                  type='text'
                  onChange={(e)=>setNumber(e.target.value)} 
            style={styles.marginY}
            fullWidth
                  my={2}
                  value={number}
          />
          <TextField
            label='Zipcode'
            name='zipcode'
                  type='text'
                  onChange={(e)=>setZipcode(e.target.value)} 
            style={styles.marginY}
            fullWidth
                  my={2}
                  value={zipcode}
          />
   
          <Button variant='contained' fullWidth style={styles.marginY} onClick={submitToUpdateUserInfo}>
            Update UserInfo
          </Button>
         
        </Grid>
      </Grid>
            
        
      </Main>
      </Grid>
      </Grid>
    </>
  );
}