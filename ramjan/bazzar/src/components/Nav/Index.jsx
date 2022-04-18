import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  menueButtonBg: {
    background: '#fff',
    color: '#000000',
    textDecoration: 'none'
  },

}
function Nav() {
  return (
    <>
      <Grid container justifyContent='space-between' alignItems='center' my={2} >
        <Grid item>
          <NavLink to='/' >
            <Button style={styles.menueButtonBg}> Home </Button> 
          </NavLink>
          <NavLink to='/about' >
            <Button style={styles.menueButtonBg}> About Us </Button> 
          </NavLink>
          <NavLink to='/product' >
            <Button style={styles.menueButtonBg}> Shop </Button> 
          </NavLink>
          <NavLink to='/contact' >
            <Button style={styles.menueButtonBg}> Contact </Button> 
          </NavLink>
          <NavLink to='/blog' >
            <Button style={styles.menueButtonBg}> Blog </Button> 
          </NavLink>
          
        </Grid>
        
        <Grid item >
          <HeadsetMicIcon style={{color:'red'}}/> 16519
        </Grid>
      </Grid>
  </>
    
  )
}

export default Nav