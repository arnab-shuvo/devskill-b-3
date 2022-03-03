import { Button, Menu } from '@material-ui/core'
import { MenuItem } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

export default function FilterProducts({filterHandle, sortCategory}) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Pr0duct Category
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => {
                handleClose();
                filterHandle("men's clothing");
            }}>Men's Clothing</MenuItem>

        <MenuItem onClick={() => {
                handleClose();
                filterHandle("women's clothing");
            }}>Women's clothing</MenuItem>
        
        <MenuItem onClick={() => {
                handleClose();
                filterHandle("electronics");
            }}>Electronincs</MenuItem>
      </Menu>
      <Button onClick={() => {
                sortCategory("electronics");
            }}>Sort Category</Button>
    </div>
  )
}
