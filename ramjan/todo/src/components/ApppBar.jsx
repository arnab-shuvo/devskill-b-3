
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react';

const styles = {
  main: {
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
  }
}
const pages = ['Home', 'About', 'Services', 'Portfolio', 'Contact']
function ApppBar() {
  return (
    <Grid container>
      <Grid item sm={12}>
      <div style={styles.main}>
      <AppBar position="static">
      <Toolbar style={{ backgroundColor: '#5b1547' }}>
        <Box flexGrow={1}>
        <Grid container>
          
          <Grid item sm={8} style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
          {
                  pages.map((page, index) =>
                    <Typography key={ index} variant='h6' style={{color: '#fff', margin:'5px', padding:'5px', alignItems:'center'}}> { page } </Typography>
                  )
          }
          </Grid>
        </Grid>
        </Box>
        </Toolbar>
        </AppBar> 
      </div>
      </Grid>
      
      </Grid>
      
       
    
  )
}

export default ApppBar