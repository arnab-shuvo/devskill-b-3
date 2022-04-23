import React, { useState, useEffect } from 'react'
import logo from "../Assets/logo.png";
import { Link, useNavigate } from "react-router-dom"; 

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useStyles } from './Styles/UseStyle';
import { Nav, NavSliceTop } from './Styles/NavStyle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useDispatch, useSelector } from 'react-redux';
import NavbarMui from './NavbarMui';
import { logout } from '../store/action/UserAction';
import { loadCartItems } from "../store/action/AddToCartAction";



export default function Navbar() {
  const dispatch = useDispatch();
  
  // Destructuring "categoryList" from CategoryReducer
  // prodCategories is comming from RootReducer (prodCategories:CategoryReducer,)
  const { categoryList } = useSelector((state) => state.prodCategories); 
  
  const { loadCart } = useSelector((store) => store.cartItems); 
  const loggedInUser = useSelector((store) =>store.userStore);
  
  console.log(loadCart, '===Navbar- cart list...');

  var cartLength;
  if(loggedInUser.isAuthUser === true ){
    if (!loadCart.status==="error" || loadCart.status===0){
      cartLength = loadCart.products.length;
      //console.log(cartLength, '===== cartLength in Cart');
    }else{
      cartLength = 0;
    }
  }else{
    cartLength = loadCart.length; // will found zero (0)
  }
  
  useEffect(() => {
    if(loggedInUser.isAuthUser === true){
          dispatch(loadCartItems(loggedInUser.token.userInfo.token));
          
      };
  }, []);


  const classes = useStyles();

  const navigate = useNavigate();
    const toLogin = () =>{
      navigate(`/login/`);
  }
  
  const toSignup = () =>{
      navigate(`/signup/`);
  }
  
  const  toCartDetail = () =>{
      navigate(`/user/cart/`);
  }
  const toProfile=()=>{
    navigate('/user/dashboard');
  }
  const toOrders=()=>{
    navigate('/user/my-orders');
  }
  const toLogout = () =>{
    localStorage.clear();
    dispatch(logout()); //Not working...
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
        (loggedInUser.isAuthUser===true) ?
        (
          <span>
              <MenuItem onClick={toProfile}>Profile</MenuItem>
              <MenuItem onClick={toOrders}>My Orders</MenuItem>
              <MenuItem onClick={toLogout}>Logout</MenuItem>
          </span>
              
          
        ):
        (
          <span>
              <MenuItem onClick={toLogin}>Signin</MenuItem>
              <MenuItem onClick={toSignup}>Signup</MenuItem>
           </span>
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
        <IconButton aria-label="show 11 new notifications" color="inherit" onClick={toCartDetail}>
          <Badge badgeContent={ cartLength === 0 ? ("0") : cartLength } color="secondary">
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
              (loggedInUser.isAuthUser===true) ? 
              (
                <>
                 <NavSliceTop>
                    {loggedInUser.token.userInfo.user}
                  </NavSliceTop>
                </>
              )
              :
              (
                <> 
                    {/* Public Area */}
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
            
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
        </div>

          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit"  onClick={toCartDetail}>
              <Badge 
                badgeContent={ cartLength === 0 ? ("0") : cartLength }
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

