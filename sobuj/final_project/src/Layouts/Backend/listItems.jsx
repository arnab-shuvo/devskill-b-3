import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from "../../store/action/UserAction";
import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Divider } from "@material-ui/core";
import { useDispatch } from "react-redux";
import TuneIcon from '@material-ui/icons/Tune';

const SideNavbarAdmin = () => {
  

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toLogout = ()=>{
    dispatch(logout());
    navigate(`/login/`);
  }

  // console.log(this.state.isAuthUser, '==== isAuthUser' )
  return(
  <>
    
    
      <NavLink to={"/admin"}>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            Dashboard
          </ListItemButton>
        </NavLink>

        <NavLink to={"/admin/manage-category"}>
          <ListItemButton>
            <ListItemIcon>
              <TuneIcon />
            </ListItemIcon>
              Manage Categories
          </ListItemButton>
        </NavLink>

        <NavLink to={"/admin/manage-product"}>
          <ListItemButton>
            <ListItemIcon>
              <TuneIcon />
            </ListItemIcon>
            Manage Products
            <ListItemText />
          </ListItemButton>
        </NavLink>

        <NavLink to={"/admin/manage-orders"}>
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
        </NavLink>

        <NavLink to={"/admin/manage-users"}>
          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </NavLink>
 
                        
        <Divider sx={{ my: 1 }} />
        
        <ListItemButton onClick={toLogout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
     
    
  </>
  )


}

export default SideNavbarAdmin;