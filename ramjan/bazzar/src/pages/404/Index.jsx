import { Grid } from '@mui/material';
import React from 'react';
import notFound from '../../assets/images/404.png';


function NotFound() {
  return (
      <Grid container justifyContent='center' alignItems='center'>
          <Grid item>
              <img
                  src={notFound}
                  alt='not found'
              />
          </Grid>
      </Grid>
  )
}

export default NotFound