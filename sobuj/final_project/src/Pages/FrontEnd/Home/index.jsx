import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//Custom Components
import Preloader from "../../../Components/Preloader";

import Product from "../Product/index";

import Recommend from "../../../Components/Recommend";
import Testimonials from "../../../Components/Testimonials";
import Footer from "../../../Components/Frontend/Footer";
import ScrollToTop from "../../../Components/ScrollToTop";
import Navbar from "../../../Components/Navbar";
import Hero from "../../../Components/Hero";
import Services from "../../../Components/Services";
import Brands from "../../../Components/Frontend/Brands";


const styles = {
  wraperContainer: {
    backgroundSize: "cover",
    width: "90%",
    minHeight: "900px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  sectionHeading: {
    fontFamily: "Arial",
    fontWeight: "700",
    color: "#000",
    borderWidth: "20%",
  },
  sectionText: {
    marginTop: "5px",
    fontSize: "16px",
    color: "#fff",
    letterSpacing: "0.5px",
  },
  sectionHeadBtmLine: {
    width: "60px",
    height: "3px !important",
    backgroundColor: "#a43f49",
    margin: "10px auto",
  },
};

const AvatersCustom = styled(Paper)(({ theme }) => ({
  height: "40px",
  width: "40px",
  color: "#fff",
  transition: "all 0.5s",
  "&:hover, &:focus": {
    background: "#ffeded",
    color: "#8c363e",
  },
  cursor: "pointer",
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
}));

const Home = () => {
  const [showLoader, setShowLoader] = useState(true);
  
  return (
    <>
      <ScrollToTop />
      <Navbar />
      
      <Hero />
      <Services />

      
      <Grid container>
        <Grid
          container
          style={styles.wraperContainer}
          sx={{ flexGrow: 1 }}
          justifyContent="center"
        >
          <Preloader />
          
          <Product />
        </Grid>
      </Grid>
      
      <Brands />
      <Recommend />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
