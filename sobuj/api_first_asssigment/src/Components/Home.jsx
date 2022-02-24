import React, { useState, useEffect } from "react";
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
// import BackGroundImage from '../images/img2.jpg'
import Products from "./Products";
import ProductDetail from "./ProductDetail";




const styles ={
    wraperContainer:{
        // height: "100%",
        // backgroundImage: `url(${BackGroundImage})`,
        backgroundSize: "cover",
        width: "100%",
        minHeight: "900px",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }, 
    sectionHeading:{
        fontFamily:"Arial",
        fontWeight: "700",
        color: "#000",
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

  const [productList, setProductList] = useState([]);
  useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then((res)=> res.json())
      .then(json=>{
          setProductList(json);
      });
  }, []);

  // Product Detaili
const [selectedProduct, setSelectedProduct] = useState(null);
const [showLoader, setShowLoader] = useState(true);

const showDetail = (product) =>{
  setSelectedProduct(product);
}
const backHome = () =>{
    setSelectedProduct(null)
}


    return (

    <Grid container 
    style={styles.wraperContainer} 
    sx={{ flexGrow: 1 }} justifyContent="center">
    
    {selectedProduct!==null?
      (
        <ProductDetail selectedProduct={selectedProduct} backHome={backHome}  />
      ):(
        <Products  productList={productList} showDetail={showDetail} />
      )
    }
      

    </Grid>
    )

}

export default Home;