import React, { useState } from "react";
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { deepOrange, green } from '@mui/material/colors';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import { Avatar, Link, Stack, Step } from "@mui/material";
//Custom Components
import BackGroundImage from '../images/img2.jpg'
import Todo from "./Todo";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const styles ={
    wraperContainer:{
        // height: "100%",
        backgroundImage: `url(${BackGroundImage})`,
        backgroundSize: "cover",
        width: "100%",
        minHeight: "900px",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor:"#000",
    }, 
    sectionHeading:{
        fontFamily:"Arial",
        fontWeight: "700",
        color: "#fff",
        // borderBottom:"2px solid #8c363e",
        borderWidth:"20%",
    },
    sectionText:{
        marginTop: "5px",
        fontSize: "16px",
        color: "#fff",
        letterSpacing: "0.5px",
    },
    sectionHeadBtmLine:{
        width: "60px",
        height: "3px !important",
        backgroundColor: "#a43f49",
        margin: "10px auto",
    }
}
  
  const AvatersCustom = styled(Paper)(({ theme }) => ({
    height: "40px",
    width: "40px",
    color: "#fff",
    transition: "all 0.5s",
    '&:hover, &:focus': {
        background: "#ffeded",
        color: "#8c363e",
    },
    cursor: "pointer",
    textAlign:"center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    
  }));

const Home = () => {
    return (
    <Grid container 
    style={styles.wraperContainer} 
    sx={{ flexGrow: 1 }} justifyContent="center">
      <Todo />
      <Grid container  xs={12}>
        <Grid item xs={6} justifyContent="center" textAlign="center">
            asdf
        </Grid>
        <Grid item xs={6} justifyContent="center" textAlign="center">
            asdfkljlkjlj
        </Grid>
      </Grid>

    </Grid>
    )

}

export default Home;