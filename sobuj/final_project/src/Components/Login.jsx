import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom"; 
import PropTypes from 'prop-types';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { userActions } from '../store/action/UserAction';
import { setUserInfo } from '../store/action/UserAction';
import { userLogin } from '../store/action/UserAction';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://isyecom.com">
        ISY Ecom
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export default function Login() {

  const dispatch = useDispatch();
  
  // Destructuring "userInformation" from UserReducer
  // userReducedInfo is comming from RootReducer (userReducedInfo:UserReducer,)
  const { userInformation } = useSelector((store) => store.userStore); 

  // useEffect(() => {
  //   dispatch(loadCategories());
  // }, []);
  
  const navigate = useNavigate();
    const toSignup = () =>{
      navigate(`/signup/`);
  }
    const toHome = () =>{
      navigate(`/`);
  } 

  
  async function loginUser(credentials) {
    return fetch("http://localhost:8080/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((data) => data.json())
      .then((json) => json);
      
  }

  //Handle Submit 
 

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const handleFormSubmit = async e =>{
    e.preventDefault();

    // if (email && password) {
    //     //console.log(password, "===password after submit");
    //     // dispatch(userActions.login(email, password));
    //     let result = await fetch("http://localhost:8080/signin", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Accept":"application/json",
    //       },
    //       body: JSON.stringify(email, password),
    //     })
    //     dispatch(setUserInfo(result));

    //     console.log(result, "====result from login page")
    // }

    const user = await loginUser({
      email,
      password
    });
    console.log(user, "===user");
    dispatch(setUserInfo(user));
    console.log(user.userInfo.role, "====result from login page")
    if(user.userInfo.role === 'admin'){
      navigate('/admin');
    }else if(user.userInfo.role === 'user'){
      navigate('/user/home');
    }
    
  }
  

  return (
    <ThemeProvider theme={theme}>

      {/* {token} */}

      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={e=> setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e=>setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
              <Grid item xs>
                <Link onClick={toHome} variant="body2" style={{cursor: "pointer"}}>
                  Back to Home
                </Link>
              </Grid>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item sm>
                <Link variant="body2" onClick={toSignup} style={{cursor: "pointer"}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
               
            </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

//  Login.propTypes = {
//    setToken: PropTypes.func.isRequired,
//  }