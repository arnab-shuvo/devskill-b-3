import { Grid, Typography } from '@mui/material'
import React from 'react'
import PCJ from '../../assets/images/pcj.png'
import { FollowUs } from '../../lib/FollowUs'
import { PayMethods } from '../../lib/PaymentMethod'

const styles = {
  img: {
      width: '80%'
  },
  socialImage: {
    width: '50%'
},
}


function Footer() {
  return (
    <>
      <Grid container my={2}>
        <Grid item xs={6} sm={3}>
            <Typography variant='h6'> Top Categories </Typography>
        </Grid> 
        <Grid item xs={6} sm={3}>
            <Typography variant='h6'> Payment Method </Typography>
        </Grid> 
        <Grid item xs={6} sm={3}>
            <Typography variant='h6'> Follow Us </Typography>
        </Grid> 
        <Grid item xs={6} sm={3}>
            <Typography variant='h6'> Verified by </Typography>
        </Grid> 
      </Grid>
      
    <Grid container my={2}  spacing={3}>
      <Grid item xs={6} sm={3} display='flex' flexDirection='column'>
       <a href='/'> Home </a>
       <a href='/about'> About US </a>
       <a href='/product'> Shop </a>
       <a href='/contact'> Contact </a>
       <a href='/blog'> Blog </a>
      </Grid>
      <Grid item xs={6} sm={3} display='flex' justifyContent='flex-start'>
        {
          PayMethods.map((PayMethod, index) =>
          <Grid item sm={3} key={index} >
              <img src={PayMethod.image} alt={ PayMethod.altTag } style={styles.img} />
          </Grid> 
          )
        }
      </Grid>
      <Grid item xs={6} sm={3} display='flex' justifyContent='flex-start'>
        {
          FollowUs.map((Follow, index) =>
          <Grid item sm={3} key={index} >
              <a href={Follow.link} target='_blank'>
                <img src={Follow.image} alt={Follow.altTag} style={styles.socialImage} />
              </a>
          </Grid> 
          )
        }
      </Grid>
      <Grid item xs={6} sm={3}>
          <img src={ PCJ } alt='complient certificate' style={styles.img} />
      </Grid>
    </Grid>
    </>
    
  )
}

export default Footer