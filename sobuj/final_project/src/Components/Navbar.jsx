
import React from 'react'
import logo from "../Assets/logo.png";
import {Button} from './Styles/Button';
import { Link, useNavigate } from "react-router-dom"; 
import ButtonMui1 from './ButtonMui1';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useStyles } from './Styles/UseStyle';
import { Nav, NavSliceTop } from './Styles/NavStyle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useDispatch, useSelector } from 'react-redux';
// import { unSetUserInfo } from '../store/action/UserAction';
import NavbarMui from './NavbarMui';
import { logout } from '../store/action/UserAction';
import { useEffect } from 'react';
import { getCartItems } from "../store/action/AddToCartAction";



export default function Navbar() {
  const dispatch = useDispatch();

  // Destructuring "categoryList" from CategoryReducer
  // prodCategories is comming from RootReducer (prodCategories:CategoryReducer,)
  const { categoryList } = useSelector((state) => state.prodCategories); 
  

   // Destructuring "cart" from CartReducer
   // cartItems is coming from RootReducer (cartItems:cartReducer,)
  //const cart = useSelector((store) => store.cartData); //Stored Cart 
  const cartItems = useSelector((store) =>store.cartItems); // Getting Cart Items
  console.log(cartItems, "=========cart Items");

  const userInfo = useSelector((store) =>store.userStore);
  //const loggedInUser = userInfo.token.userInfo;
  const token = userInfo.token.userInfo.token;
  console.log(token, '==========token');

  useEffect(() => {
    if(token){
       fetch(`http://127.0.0.1:8080/cart`,{
              method: "GET",
              headers: {
                "authorization": "bearer "+ token
              }
        })
      .then((res) => res.json())
      .then((json) => {
        dispatch(getCartItems(json));
      });
    }

  }, []);

  const classes = useStyles();

  const navigate = useNavigate();
    const toLogin = () =>{
      navigate(`/login/`);
  }
  
  const toSignup = () =>{
      navigate(`/signup/`);
  }
  
  const toAccount = () =>{
      navigate(`/user/home/`);
  }
  
  const toLogout = () =>{
    dispatch(logout());
    window.location.reload();
    navigate(`/`);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      { 
        (userInfo.isAuthUser===true) ?
        (
          <>
              <MenuItem onClick={toAccount}>My Account</MenuItem>
              <MenuItem onClick={toLogout}>Logout</MenuItem>
          </>
        ):
        (
          <>
              <MenuItem onClick={toLogin}>Signin</MenuItem>
              <MenuItem onClick={toSignup}>Signup</MenuItem>
          </>
        )
      }
      
       
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
 
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={ cartItems.length === 0 ? ("0") : cartItems.length } color="secondary">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const [category, setCategory] = React.useState('');

  const handleChange = (e) => {//event: SelectChangeEvent
    setCategory(e.target.value);
  };

  return (
    <>
            {
              (userInfo.isAuthUser===true) ? 
              (
                <>
                 <NavSliceTop>
                    {userInfo.token.userInfo.user}
                  </NavSliceTop>
                </>
              )
              :
              (
                <> 
                    Public Area
                </>
              )
            }
       <Nav > 
           
          <div className='brand'>
              <div className='container'  >
                {/* <img src={logo} width="110px" alt=""/> */}
                Isy<span className=''>Ecom</span>
              </div>
              <div className="toggle"></div>            
          </div>
           
          
        <div className={classes.searchDropdown}>
          <FormControl sx={{p:0, minWidth: 120 }} justifyContent="left">
          <InputLabel id="demo-select-small">Categories</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {categoryList.map((row)=>{
                  return(
                    <MenuItem value={row._id}>{row.name}</MenuItem>
                  );
                })}
              </Select>
        </FormControl>
            
          
        </div>
        

        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </div>

          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge 
                badgeContent={ cartItems.length === 0 ? ("0") : cartItems.length }
                color="secondary">
                <AddShoppingCartIcon /> 
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          {renderMobileMenu}
          {renderMenu}
        </Nav>

        <NavbarMui />

    </>
  )
}

