import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import Layout from '../../components/Layout/Index'

const styles = {
  marginHorizontal: {
    marginTop: '10px',
    marginBottom : '10px'
  },
  backgroundColor: {
    backgroundColor :'#e9e9e9'
  },
}

function Contact() {
  return (
    <>
      <Layout>
      <Grid container spacing={2} my={3} style={styles.backgroundColor}>
      <Grid item xs={12} sm={6} md={ 6 }>
        <Typography variant='h3'> Connect With Us </Typography>
        <Typography variant='body1'>
          220/B Gulshan <br />
          Tejgaon Industrial Area;<br/>
          Tejgaon, Dhaka 1208;<br/>
          Phone: +88 02 8801301-32<br/>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={ 6 }>
        <Typography variant='h3' > Email Us </Typography>
        <TextField
            style={styles.marginHorizontal}
            label='Email Address'
            variant='outlined'
            fullWidth
          />
        <TextField
            style={styles.marginHorizontal}
            label='Message'
            variant='outlined'
            multiline
            maxRows={4}
            fullWidth
        />
        <Button variant='contained'  fullWidth style={styles.marginHorizontal}> Send </Button>
      </Grid>
      </Grid>
    </Layout>
  </>
  )
}

export default Contact