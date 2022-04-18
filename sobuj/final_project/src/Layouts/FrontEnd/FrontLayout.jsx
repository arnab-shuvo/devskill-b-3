import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//Custom Components
import Footer from "../../Components/Footer";
import ScrollToTop from "../../Components/ScrollToTop";
import Navbar from "../../Components/Navbar";
import { Link, Typography } from "@material-ui/core";


const styles = {
  wraperContainer: {
    backgroundSize: "cover",
    width: "100%",
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
function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://isyecom">
          ISY Ecom
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const FrontLayout = (PageComponent) => {
    return function WithPage({ ...props }) {
        return (
            <>
              <ScrollToTop />
              <Navbar />
              
                <Grid
                    container
                    style={styles.wraperContainer}
                    sx={{ flexGrow: 1 }}
                    justifyContent="center"
                >
                    {/* <!-- Called The Component Parameter --> */}
                        <PageComponent />   
                    {/* <!-- Called The Component Parameter --> */} 
                </Grid>
                <Copyright />
              <Footer />
            </>
          );
    };
//   const [showLoader, setShowLoader] = useState(true);
  
  
};

export default FrontLayout;
