import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Shipping } from '../../lib/Data/Data';

const styles = {
    main: {
        backgroundColor: '#3a4855',
        height: 'auto',
        marginTop: '15px',
        marginBottom: '15px',
        padding: '10px'
    },
    bg: {
        color: '#fff'
    },
    shipping: {
        width: '30px',
        height: '30px'
    }
}

function SmallBanner() {
  return (
      <Grid container style={styles.main}>
          
        {
            Shipping.map((ship, index) =>
                <Grid item xs={3} key={ ship.id }>
              <Grid container justifyContent='center' alignItems='center' >
                  <Grid item xs={2}>
                      <img
                          alt='shipping'
                          style={styles.shipping}
                          src={ship.image}
                      />
                  </Grid> 
                  <Grid item xs={10}>
                            <Typography variant='subtitle1' style={{ color: '#fff' }}> {ship.title } </Typography>
                      <Typography variant='body2' style={{color: '#ccc'}}> {ship.description} </Typography>
                  </Grid> 
               </Grid>
          </Grid>
           
        )   
    }
                
    </Grid>
  )
}

export default SmallBanner