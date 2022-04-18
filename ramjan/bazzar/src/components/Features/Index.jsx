import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { FeatursData } from '../../lib/Features';

const styles = {
    img: {
        width: '15%',
        marginRight: '10px'
    },
    center: {
        display: 'flex',
        
        alignItems:'center'
    }
}
function Features() {
  return (
      <>
         <Grid container spacing={1}  my={2} justifyContent='space-between'>
              {
                  FeatursData.map((Featur, index) => 
                    <Grid item xs={2} key={index} >
                          <Box style={styles.center}>
                              <img src={Featur.image } alt="new image"  style={styles.img}/>
                              <Box>
                                  <Typography> { Featur.title} </Typography>
                                  <Typography variant='caption'> { Featur.desc} </Typography>
                              </Box>
                       </Box>
                    </Grid>
                  )
                }  
            </Grid>
      </>
  )
}

export default Features