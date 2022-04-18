import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import AdminDrawer from '../../components/AdminDrawer/Index';
import { getUserAction } from '../../store/actions/AllUserAction/Index';

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

export default function Users() {
  const theme = useTheme();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.userStore)
  const allUser = useSelector((store) => store.allUserStore)
  const { Users } = allUser;
  
  const dispatch = useDispatch()

  const token = userData.token.userInfo.token;

  console.log(Users, '->>>all user');

  useEffect(() => {
    dispatch(getUserAction(token))
  }, []);

  
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const deleteUser = async (id) => {
   
    let result = await fetch(`http://localhost:8080/user/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': `bearer ${token}`, 
      },
    });
    
    result = await result.json();
    console.log(result);
    dispatch(getUserAction(token))
    navigate('/users');   
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
        <TableContainer component={Paper} style={useStyle.marginY}>
              <Table aria-label='All Product'>
                <TableHead>
                  <TableRow>
                    <TableCell> ID </TableCell>
                    <TableCell> Role </TableCell>
                    <TableCell> User Name </TableCell>
                    <TableCell> Email  </TableCell>
                    <TableCell> Stock  </TableCell>
                    <TableCell> Edit  </TableCell>
                    <TableCell> Delete  </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    Users.map((user, index) =>
                    <TableRow key={index}>
                        <TableCell>  {index+1 } </TableCell>
                        <TableCell> {user.role } </TableCell>
                        <TableCell > {user.username } </TableCell>
                        <TableCell > {user.email } </TableCell>
                        <TableCell > {user.phone } </TableCell>
                        <TableCell> <NavLink to={`edituser/${user._id}`}><Button> Edit </Button>  </NavLink></TableCell>
                        <TableCell>
                          {
                            user.role === 'admin' ? <Button onClick={() => deleteUser(user._id)} disabled>  Delete </Button>
                              :  <Button onClick={() => deleteUser(user._id)}> Delete </Button>
                          }
                         
                        
                        </TableCell>
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