
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
import { Nav } from './Styles/NavStyle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useDispatch, useSelector } from 'react-redux';

export default function Navbar({}) {
  
  // Destructuring "categoryList" from CategoryReducer
  const { userInformation } = useSelector((store) => store.userStore); 
  console.log(userInformation, '=====userInformation')


  // Destructuring "categoryList" from CategoryReducer
  const { categoryList } = useSelector((state) => state.prodCategories); // prodCategories is comming from RootReducer (prodCategories:CategoryReducer,)
  
   // Destructuring "cart" from CartReducer
  const state = useSelector((state) => state.cartItems); // cartItems is coming from RootReducer (cartItems:cartReducer,)
  console.log(state, "===cart");

  const classes = useStyles();

  const navigate = useNavigate();
  
  const toLoginSide = () =>{
      navigate(`/login/`);
  }
  const toSignup = () =>{
      navigate(`/signup/`);
  }
  const toLogout = ()=> {
    // remove user from local storage to log user out
    
    localStorage.removeItem('token');
    navigate('/')

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
      
          <MenuItem onClick={toLoginSide}>My Account</MenuItem>
          <MenuItem onClick={toLogout}>Logout</MenuItem>
       
          <MenuItem onClick={toLoginSide}>Signin</MenuItem>
          <MenuItem onClick={toSignup}>Signup</MenuItem>
        
      
      
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
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={ state.length === 0 ? ("0") : state.length } color="secondary">
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
                badgeContent={ state.length === 0 ? ("0") : state.length }
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

    </>
  )
}

