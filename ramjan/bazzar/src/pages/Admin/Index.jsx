import { Card, CardContent, Grid, Typography } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Admin() {
  const dispatch = useDispatch()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const AllProductFromStore = useSelector((store) => store.productStore);
  const userData = useSelector((store) => store.userStore)
  const categoryData = useSelector((store) => store.categoryStore)
  const { category } = categoryData;
  
  const token = userData.token.userInfo.token;
  
  const allUser = useSelector((store) => store.allUserStore)
  
  const { Users } = allUser;

  const { products } = AllProductFromStore
  
  console.log(Users)

  useEffect(() => {
    dispatch(getProductListAction())
  }, []);

  useEffect(() => {
    dispatch(getUserAction(token))
  }, []);

  useEffect(() => {
    dispatch(getAllCategoryAction());
  }, []);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <AdminDrawer />
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
        <Main open={open}>
        <DrawerHeader />
            <Grid container spacing={2}>
              
              <Grid item xs={6} sm={6} md={6} >
                <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   All User
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      { Users.length }
                  </Typography>
                </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={6} sm={6} md={6} >
                <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   All Products
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      ({ products.length })
                  </Typography>
                </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={6} sm={6} md={6} >
                <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   All Category
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      { category.length}
                  </Typography>
                </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} md={6} >
                <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                   All Order
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    (120)
                  </Typography>
                </CardContent>
                </Card>
              </Grid>
              
          </Grid>
      </Main>
      </Grid>
      </Grid>
    </>
  );
}