import { Backdrop, Box, Button, Card, CardActionArea, CardContent, Fade, Grid, Modal, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import './styles.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateMyInfoAction, loadMyInfo} from '../../../store/action/UserAction';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

    Card:{
        marginTop:0,
        CardContent:{

        },
        // CardActionArea:{
        //     justifyContent:"right",
        //     textAlign:"right",
        // }
    }
  };

const UpdateProfile = () => {
    const loggedInUser = useSelector((store) =>store.userStore);
    
    // console.log(loggedInUser.token.userInfo.token)
    const { myInfo } = useSelector((store) => store.userStore);

    const dispatch = useDispatch();

    const [openCreate, setOpenCreate] = React.useState(false);
    const handleOpenCreate = () => setOpenCreate(true);
    const handleCloseCreate = () => setOpenCreate(false);

    const [firstname, setFirstname]=useState(myInfo.firstname);
    const [lastname, setLastname]=useState(myInfo.lastname);
    const [username, setUsername]=useState(myInfo.username);
    const [email, setEmail]=useState(myInfo.email);
    const [lat, setLat]=useState(myInfo.lat);
    const [long, setLong]=useState(myInfo.long);
    const [street, setStreet]=useState(myInfo.street);
    const [phone, setPhone]=useState(myInfo.phone);
    const [city, setCity]=useState(myInfo.city);
    const [zipcode, setZipcode]=useState(myInfo.zipcode);
    // const [password, setPassword]=useState("");
    const [error, setError]=useState(false);




    
  async function formSubmit(userInfoArray) {
    return fetch("http://localhost:8080/my-detail", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "authorization": "bearer "+ userInfoArray.userToken
      },
      body: JSON.stringify({
        "address": {
            "geolocation": {
                "lat": userInfoArray.lat,
                "long": userInfoArray.long
            },
            "city": userInfoArray.city,
            "street": userInfoArray.street,
            "number": userInfoArray.number,
            "zipcode": userInfoArray.zipcode
        },
        "role": "user",
        "email": userInfoArray.email,
        "username": userInfoArray.username,
        "phone": userInfoArray.phone,
        "password": userInfoArray.password
      }),
    })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => console.log(json, '===== update info success'));
  }

    const handleFormSubmit = async e =>{
        let userToken = loggedInUser.token.userInfo.token;
        if (e && e.preventDefault) { e.preventDefault();}
        if(email.length && username.length && firstname.length && phone.length){
            
            const formDispatch = await formSubmit({
                email, firstname, lastname, username, 
                lat, long, street, phone, city, zipcode, userToken
            });
            dispatch(updateMyInfoAction(formDispatch));
            dispatch(loadMyInfo(userToken));
            setOpenCreate(false)
        }else{
            setError(true);
        }
    }
  return (
    <div>
       <Button 
        variant="contained" 
        color="secondary"
        sx={{ mt:2 }}
        onClick={handleOpenCreate} 
        >Update MyInfo</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openCreate}
        onClose={handleCloseCreate}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCreate}>
          <Box sx={style}>
          <Card>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          Update My Information
                      </Typography>
                        <>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField sx={{ mt:2 }}
                                        onChange={(e)=>setFirstname(e.target.value)}
                                        fullWidth
                                        type="string"
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
                                        type="string"
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
                                    type="string"
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
                                    helperText={error? "A valid email address is required!":""}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    value={email}
                                    variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    type="string"
                                    id="phone"
                                    label="Phone Number"
                                    name="phone"
                                    autoComplete="phone-number"
                                    helperText={error? "Phone Number is required!":""}
                                    onChange={(e)=>setPhone(e.target.value)}
                                    value={phone}
                                    variant="outlined"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField sx={{ mt:2 }}
                                        onChange={(e)=>setLat(e.target.value)}
                                        fullWidth
                                        type="string"
                                        id="lat"
                                        label="Latitude Value"  
                                        variant="outlined"
                                        value={lat}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField sx={{ mt:2 }}
                                        onChange={(e)=>setLong(e.target.value)}
                                        fullWidth
                                        type="string"
                                        id="long"
                                        label="Longitude Value"  
                                        variant="outlined"
                                        value={long}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField sx={{ mt:2 }}
                                        onChange={(e)=>setCity(e.target.value)}
                                        type="string"
                                        fullWidth 
                                        id="city"
                                        label="City" 
                                        variant="outlined"
                                        value={city}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField sx={{ mt:2 }}
                                        onChange={(e)=>setZipcode(e.target.value)}
                                        fullWidth 
                                        type="string"
                                        id="zipcode"
                                        label="Zipcode"  
                                        variant="outlined"
                                        value={zipcode}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField 
                                        onChange={(e)=>setStreet(e.target.value)}
                                        fullWidth 
                                        type="string"
                                        name="street"
                                        id="street"
                                        label="Street Address"  
                                        variant="outlined"
                                        value={street}
                                    />
                                </Grid>

                                {/* <Grid item xs={12}>
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
                                </Grid> */}
                            </Grid>
                            
                             
                          </>
                        

                </CardContent>
                <CardActionArea style={{ textAlign:"right" }}>
                        <Button sx={{ mt:5 }} onClick={()=>{handleFormSubmit()}} variant="contained" color="secondary">
                            Update
                        </Button>
                        <Button sx={{ mt:5, ml:10 }} onClick={()=>{handleCloseCreate()}} >
                            Close
                        </Button>
                </CardActionArea>
                     
            </Card>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default UpdateProfile
