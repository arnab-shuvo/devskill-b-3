import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProductEdit } from '../Redux/actions/productAction';

export default function TopAppBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAddProduct=()=>{
    navigate("/addProduct");
    dispatch(setProductEdit({}))

  }
  return (
    <Box sx={{ flexGrow: 1, mb:'40px' }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ecom
          </Typography>
          <Button color="inherit" onClick={()=>navigate('/')}>Home</Button>         
          <Button color="inherit" onClick={handleAddProduct}>Add Product</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
