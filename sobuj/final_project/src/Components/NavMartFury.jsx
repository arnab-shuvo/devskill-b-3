
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


export default function Navbar() {
  const classes = useStyles();

 
  return (
    <>
        <Nav>
          
          <div className="header">
            <div className="header__top">
              <div class="ps-container">
                <div class="header__left">
                    <a class="ps-logo" href="/"></a>
                   {/* menu--product-categories (Toggle Menu) */}
                </div>
                <div class="header__center">
                  <form class="ps-form--quick-search" method="get" action="/">
                    <div class="ps-form__categories">
                      <select class="form-control">
                        <option value="All">All</option>
                        <option value="Babies &amp; Moms">Babies &amp; Moms</option>
                        <option value="Books &amp; Office">Books &amp; Office</option>
                        <option value="Cars &amp; Motocycles">Cars &amp; Motocycles</option>
                        <option value="Clothing &amp; Apparel">Clothing &amp; Apparel</option>
                        <option value="&nbsp;Accessories">&nbsp;Accessories</option>
                        <option value="Bags">Bags</option>
                      </select>
                    </div>
                    <div class="ps-form__input">
                      <input class="form-control" type="text" placeholder="I'm shopping for..." value="" />
                    </div>
                    <button>Search</button>
                    <div class="ps-panel--search-result">
                      <div class="ps-panel__content"><p>No product found.</p></div>
                    </div>
                  </form>
                </div>
                <div class="header__right">
                  <div class="header__actions">
                    <a class="header__extra" href="/account/compare"><i class="icon-chart-bars"></i><span><i>0</i></span></a>
                    <a class="header__extra" href="/account/wishlist"><i class="icon-heart"></i><span><i>0</i></span></a>
                    <div class="ps-cart--mini">
                      <a class="header__extra" href="#"><i class="icon-bag2"></i><span><i>0</i></span></a>
                      <div class="ps-cart__content">
                        <div class="ps-cart__items"><span>No products in cart</span></div>
                      </div>
                    </div>
                    <div class="ps-block--user-header">
                      <div class="ps-block__left"><i class="icon-user"></i></div>
                      <div class="ps-block__right"><a href="/account/login">Login</a>
                        <a href="/account/register">Register</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
           

          
        </Nav>


    </>
  )
}

