import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Banner from '../images/watch.png'

const styles = {
    center: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#e3e3e3'
    },
    img: {
        width: '100%',
        height: 'auto',
        backgroundSize: 'cover',
    },
    marginHorizontal : {
        marginTop: '10px',
        marginBottom: '50px',
        backgroundColor: '#e3e3e3'
    }
}

function MidBanner() {
  return (
      <Grid container style={styles.marginHorizontal}>
          <Grid item xs={6} sm={6} md={6}>
          <img
            src={Banner}
            alt='Banner'
                  loading="lazy"
                  style={styles.img}
      />
          </Grid>
          <Grid item xs={6} sm={6} md={6} style={styles.center}>
            <div>
               <Typography variant='subtitle1'> Girls Collection 2022 </Typography>   
            </div>
            <div>
               <Typography variant='h5'> SURPRISING BLACK </Typography>   
            </div>
            <div>
               <Button variant='contained'> Shop Now </Button>
            </div>
          </Grid>
      </Grid>
  )
}

export default MidBanner