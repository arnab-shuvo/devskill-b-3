import { Grid, Typography } from '@mui/material'
import React from 'react'

const styles = {
    marginHorizontal: {
        marginTop: '15px',
        marginBottom : '15px'
    },
    aboutImage: {
        width: '100%',
        height: 'auto'
    }
}

function Content({title, description, image}) {
  return (
      <Grid container style={styles.marginHorizontal} spacing={ 2}>
          <Grid item xs={12} align='center'>
              <Typography variant='h4'> {title }</Typography>
          </Grid>
          <Grid item xs={6}>
              <Typography variant='body2' align='justify'>
                  { description } 
              </Typography>
          </Grid>
          <Grid item xs={6}>
                <img
                    alt='shipping'
                    style={styles.aboutImage}
                    src={image}
                />
          </Grid>
    </Grid>
  )
}

export default Content