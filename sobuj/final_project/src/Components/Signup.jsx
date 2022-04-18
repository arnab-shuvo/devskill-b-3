import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom"; 
import { newUserRegistration } from '../store/action/UserAction';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Copyright(props) {
 
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        ISY Ecom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const navigate = useNavigate();
  
  const toSignup = () =>{
      navigate(`/login/`);
  }
  const toHome = () =>{
      navigate(`/`);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

    
  const dispatch = useDispatch();

  const [lastname, setLastname]=useState("");
  const [firstname, setFirstname]=useState("");
  const [username, setUsername]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  const [error, setError]=useState(false);

  async function formSubmit(userData) {
    return fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "authorization": "bearer "+ data.userToken
      },
      body: JSON.stringify(userData),
    })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => console.log(json));
  }

const handleFormSubmit = async e =>{
    if (e && e.preventDefault) { e.preventDefault();}
    if(firstname.length && username.length && email.length && password.length){ 
        const formDispatch = await formSubmit({
            email, 
            firstname, 
            lastname,
            username,
            password,
        });
        dispatch(newUserRegistration(formDispatch));
        navigate('/login');

    }else{
        setError(true);
    }
  }




  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
                <TextField sx={{ mt:2 }}
                    onChange={(e)=>setFirstname(e.target.value)}
                    fullWidth
                    error={error}
                    id="firstname"
                    label="First Name" 
                    helperText={error? "Firstname is required!":""}
                    variant="outlined"
                    value={firstname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField sx={{ mt:2 }}
                    onChange={(e)=>setLastname(e.target.value)}
                    fullWidth
                    // error={error}
                    id="lastname"
                    label="Last Name" 
                    // helperText={error? "Lastname is required!":""}
                    variant="outlined"
                    value={lastname}
                />
              </Grid>

              <Grid item xs={12} >
                <TextField
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  autoComplete="username"
                  helperText={error? "Username is required!":""}
                  onChange={(e)=>setUsername(e.target.value)}
                  value={username}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email-address"
                  helperText={error? "Email Address is required!":""}
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
                  variant="outlined"
                />
              </Grid>
               
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  
                  helperText={error? "Password is required!":""}
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleFormSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item sm>
                <Link  href="#" variant="body2" onClick={toHome} >
                  Back to Home
                </Link>
              </Grid>
              <Grid item sm>
                <Link href="#" variant="body2" onClick={toSignup} >
                  Have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}