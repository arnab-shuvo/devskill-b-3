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

function SignUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [signup, setSignup] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
    phone: ''
  })

  const userinfo = useSelector((store) => store.userStore)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSignup({
        ...signup,
        [name] : value
    })     
  }
  
const submitSignUpData = async (e) => {
    e.preventDefault();

let result = await fetch('http://localhost:8080/signup', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(signup)
});
 
  
  result = await result.json();
  dispatch(setUserInfo(result))
  navigate('/product');  
  
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
          <Typography variant='h6' align='center' style={styles.marginY} > Create Account </Typography>
          <TextField
            label='Username'
            name='username'
            onChange={handleInputChange}
            fullWidth
            style={styles.marginY}
          />
          <TextField
            label='email'
            name='email'
            onChange={handleInputChange}
            fullWidth
            style={styles.marginY}
            my={2}
          />
          <TextField
            label='Password'
            name='password'
            type='password'
            onChange={handleInputChange}
            style={styles.marginY}
            fullWidth
            my={2}
          />
          <TextField
            label='Phone number'
            name='phone'
            onChange={handleInputChange}
            style={styles.marginY}
            fullWidth
            my={2}
          />
          <Button variant='contained' fullWidth  style={styles.marginY} onClick={submitSignUpData}> SignUp </Button>
          <Typography variant='body1' align='center'  style={styles.marginY}> Already Have an account <a href='/signin'> Login Here </a> </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default SignUp