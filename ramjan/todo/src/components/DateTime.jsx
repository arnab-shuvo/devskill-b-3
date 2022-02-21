import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import '../components/css/Style.css';

const styles = {
    marginHorizontal: {
        marginTop: '20px',
        marginBottom : '20px'
    },
    card: {
        textAlign: 'center'
    }
}


function DateTime() {
    const date = new Date().toLocaleString();
    const day = new Date().toLocaleString(window.navigator.language, {weekday : 'long'})
    
    
    return (
      <Grid container className='center' style={styles.marginHorizontal}>
          <Grid item xs={8}>
              <Card style={styles.card}>
                    <CardContent>
                    <Typography variant='h3'> {day} </Typography>
                    <Typography> {date} </Typography> 
                  </CardContent>
               </Card>
          </Grid>
    </Grid>
  )
}

export default DateTime