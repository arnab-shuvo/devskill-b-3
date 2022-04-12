import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const color = grey['A100']
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ background: color }}>
                    <Toolbar >

                        <Typography variant="h6" component="div" color="black">
                            Fake Commerce
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} spacing={2}>
                            <NavLink to="/" style={{textDecoration: 'none'}}>
                                <Button variant='outlined' sx={{ ml: 4, mr: 1, color: "black", display: "block", border: "2px black solid" }}>
                                    Home
                                </Button>
                            </NavLink>
                            <NavLink to="/products" style={{textDecoration: 'none'}}>
                                <Button variant='outlined' sx={{ mx: 1, color: "black", display: "block", border: "2px black solid" }}>
                                    Products
                                </Button>
                            </NavLink>
                            <NavLink to="/create-product" style={{textDecoration: 'none'}}>  
                                <Button variant='outlined' sx={{ mx: 1, color: "black", display: "block", border: "2px black solid" }}>
                                    Create Product
                                </Button>
                            </NavLink>
                            <NavLink to="/contact" style={{textDecoration: 'none'}}>
                                <Button variant='outlined' sx={{ mx: 1, color: "black", display: "block", border: "2px black solid" }}>
                                    Contact
                                </Button>
                            </NavLink>

                        </Box>

                        <Button variant='outlined' sx={{ mx: 1, color: "black", border: "2px black solid" }} startIcon={<LoginIcon />}>
                            Login
                        </Button>
                        <Button variant='outlined' sx={{ mx: 1, color: "black", border: "2px black solid" }} startIcon={<HowToRegIcon />}>
                            Register
                        </Button>

                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;