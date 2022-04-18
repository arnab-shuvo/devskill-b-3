import { Box, Grid } from '@mui/material';
import React from 'react';
import { OfferData } from '../../lib/Offer';

const styles = {
    img: {
        width: '100%',
      
    },
    center: {
        display: 'flex',
        
        alignItems:'center'
    }
}
function Offer() {
  return (
      <>
         <Grid container spacing={1}  my={2} justifyContent='space-between'>
              {
                  OfferData.map((Offer, index) => 
                    <Grid item sm={4} key={index} >
                          <Box style={styles.center}>
                              <img src={Offer.image} alt={ Offer.altTag}  style={styles.img}/>
                       </Box>
                    </Grid>
                  )
                }  
            </Grid>
      </>
  )
}

export default Offer