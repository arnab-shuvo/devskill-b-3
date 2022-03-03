import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
//Custom Components
import Products from "../Product/index";
import ProductDetail from "../Product/ProductDetail/";
import CreateProduct from "../Product/Create/index"
import Preloader from "../../Components/Preloader";

const styles ={
    wraperContainer:{
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
      fetch('https://fakestoreapi.com/products?sort=desc')
      .then((res)=> res.json())
      .then(json=>{
          setProductList(json);
      });
  }, []);

  // Product Detaili
const [selectedProduct, setSelectedProduct] = useState(null);
const [showLoader, setShowLoader] = useState(true);

const showDetail = (id) =>{
  setSelectedProduct(id);
}
const delProd=(id)=>{
  alert ("This product will be removed!");
  // fetch(`https://fakestoreapi.com/products/${id}`,{
  //           method:"DELETE"
  //       })
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
}

const updateProd=()=>{
  alert ("This product will be Updated!");
}

const backHome = () =>{
    setSelectedProduct(null)
}


    return (

    <Grid container 
    style={styles.wraperContainer} 
    sx={{ flexGrow: 1 }} justifyContent="center">
    {
      productList?
      (
        <>
          <CreateProduct />
          {selectedProduct!==null?
              (
                <ProductDetail productID={selectedProduct} backHome={backHome}  />
              ):(
                <Products  productList={productList} showDetail={showDetail} updateProd={updateProd} delProd={delProd}  />
              )
          }
        </>
      ):(
        <>
          <Preloader />
        </>
      )
    }
   
    </Grid>
    )

}

export default Home;