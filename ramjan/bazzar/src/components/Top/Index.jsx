import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { setUserInfo } from '../../store/actions/UserAction/Index';



function Top() {
    const userData = useSelector((store) => store.userStore)
    const {totalQuantities} = useSelector((store) => store.shoppingStore)
    // const { role,token } = userData.token.userInfo;
   
    const cart = '';
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const logOut = () => {
        localStorage.clear();
        dispatch(setUserInfo(null));
        navigate('/')
    }
    return (
      <>
        <Grid container justifyContent='space-between' alignItems='center' mt={2}>
            <Grid item xs={2}>
                <img src={ Logo } alt='logo'/>  
            </Grid>
            <Grid item>
                {
                    userData.token === null ? 
                        <Badge>
                            <NavLink to='/signin'>
                                <PersonIcon style={{ color: 'red' }} />
                            </NavLink>
                            </Badge> :
                            <Badge>
                                <LogoutIcon style={{ color: 'red' }} onClick={ logOut } />
                            </Badge>         
                }
                    <NavLink to='/cart'>
                        <Badge badgeContent={totalQuantities} color='primary'>
                            <ShoppingCartIcon style={{ color: 'red' }} />
                        </Badge>    
                    </NavLink>     
            </Grid>
        </Grid>
      </>
  )
}

export default Top