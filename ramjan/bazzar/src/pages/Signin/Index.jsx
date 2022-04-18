import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { setUserInfo } from '../../store/actions/UserAction/Index';


const styles = {
  marginY: {
    marginTop: '10px',
    marginBottom : '10px'
  },
  gridShadow: {
    border: '1px solid gray',
    padding: '10px'
    // boxShadow: "5px 10px red",
  },
  logoCenter: {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '50%'
  }
}

function Signin() {
  const dispatch = useDispatch()
  const userinfo = useSelector((store) => store.userStore)
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setLogin({
        ...login,
        [name] : value
    })          
}

   
const submitLoginData = async (e) => {
      e.preventDefault();
  
  let result = await fetch('http://localhost:8080/signin', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(login)
  });
  
  result = await result.json();
  dispatch(setUserInfo(result))
  navigate('/admin');      
}

  
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        my={5}
      >
        <Grid item xs={6} sm={6} md={6} style={styles.gridShadow}>
          <img src={logo} alt='logo' my={2} style={styles.logoCenter}/>
          <Typography variant='h6' align='center'   style={styles.marginY}>Login </Typography>
          
          <TextField
              label='email'
              fullWidth
              style={styles.marginY}
              my={2}
              onChange={handleInputChange}
              name='email' 
          />
          <TextField
            label='Password'
            style={styles.marginY}
            type='password'
            fullWidth
            my={2}
            onChange={handleInputChange}
            name='password'
          />
         
          <Button variant='contained' fullWidth  style={styles.marginY} onClick={submitLoginData}> Signin </Button>
          <Typography variant='body1' align='center'  style={styles.marginY}> Don't Have an account <a href='/signup'> Signup </a> </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Signin