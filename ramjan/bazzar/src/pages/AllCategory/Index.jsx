import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import AdminDrawer from '../../components/AdminDrawer/Index';
import basePath from '../../Config/Index';
import { getAllCategoryAction } from '../../store/actions/CategoryAction/Index';

const useStyle = {
    img: {
      width: '40px'
    },
    marginY: {
      marginTop: '10px',
      marginBottom: '10px'
    }
}
  
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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AllCategory() {
    const theme = useTheme();
    const categoryData = useSelector((store) => store.categoryStore)
  const { category } = categoryData;
  console.log(category, 'all category ')
    const dispatch = useDispatch()
    const navigate = useNavigate();
    console.log(category);
    const userData = useSelector((store) => store.userStore);
    const token = userData.token.userInfo.token;
    
  useEffect(() => {
      dispatch(getAllCategoryAction());
  }, []);
    
 
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  const deleteCategory = async (id) => {
   
    
    let result = await fetch(`http://localhost:8080/category/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': `bearer ${token}`, 
      },
    });
    
    result = await result.json();
    console.log(result);
    dispatch(getAllCategoryAction(result))
    navigate('/allcategory');   
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
            <NavLink to='addcategory'>
              <Button mb={ 2 } variant="outlined" startIcon={<AddCircleOutlineIcon />}>Add Category</Button>
            </NavLink>
        <TableContainer component={Paper} style={useStyle.marginY}>
              <Table aria-label='All Product'>
                <TableHead>
                  <TableRow>
                    <TableCell> ID </TableCell>
                    <TableCell> Product Image </TableCell>
                    <TableCell> Product Name </TableCell>
                    <TableCell> Price  </TableCell>
                    <TableCell> Stock  </TableCell>
                    <TableCell> Edit  </TableCell>
                    <TableCell> Delete  </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {
                      category.map((data, index) =>
                      <TableRow key={index}>
                        <TableCell> { index+1 } </TableCell>
                        <TableCell> <img src={ basePath+data.image} alt='productImage' style={useStyle.img}/></TableCell>
                              <TableCell> { data.name} </TableCell>
                              <TableCell align='center'>{ data.description} </TableCell>
                        <TableCell> <NavLink to={`editcategory/${data._id}`}><Button> Edit </Button> </NavLink> </TableCell>
                        <TableCell> <Button onClick={()=>deleteCategory(data._id)}> Delete </Button>  </TableCell>
                        </TableRow>
                       )                
                    }
                </TableBody>
              </Table> 
          </TableContainer>
      </Main>
      </Grid>
      </Grid>
    </>
  );
}