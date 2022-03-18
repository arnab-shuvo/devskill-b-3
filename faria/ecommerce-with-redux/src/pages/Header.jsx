import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import rightImg from "../images/Rectangle238.png";
import Grid from "@mui/material/Grid";
import "./layout.css";


const ProductPageHeader = () => {
  return (
    <>
      <div className="fluid-container-hero">
        <Container>
          <div className="Hero-section">
            <Grid
              sx={{
                height: "500px",
                width: "100%",
                bgcolor: "#0A1929",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              container
            >
              <Grid item sm={12}>
                <Box
                  sx={{
                    width: "100%",
                    bgcolor: "#0A1929",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "3rem",
                      fontWeight: "500",
                      minWidth: 100,
                      color: "#fff",
                    }}
                  >
                    The Fake Shop
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "2.5rem",
                      fontWeight: "500",
                      minWidth: 100,
                      color: "#fff",
                    }}
                  >
                    All 
                    <Box
                      sx={{
                        fontSize: "2.5rem",
                        fontWeight: "500",
                        minWidth: 100,
                        padding: "0 10px",
                        color: "#ffbb00",
                      }}
                      component="span"
                    >
                      not
                    </Box>
                     original products in <br></br>
                     one place!
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductPageHeader;
