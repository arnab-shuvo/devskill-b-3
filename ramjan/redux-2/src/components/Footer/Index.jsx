import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Cards, Policys, Socials } from '../../lib/Data/Data'
const styles = {
  marginHorizontal: {
      marginTop: '20px',
      marginBottom: '20px'
  },
  img: {
    width: '15px',
    height: '15px'
  }
}


function Footer() {
  return (
      <Grid container style={styles.marginHorizontal}> 
          <Grid item xs={ 12 } sm={6} md={4}>
            {
              Policys.map((policy, index) =>
                <Typography key={index}>  { policy} </Typography>
              )
            }           
          </Grid>
          <Grid item xs={12} sm={6} md={4} display='flex' flexDirection='column'>
            {
          Socials.map((social, index) =>
              <Grid key={index}> 
                <Grid item display='flex' flexDirection='row' alignItems='center'>
                  <img
                  alt='socila logo'
                  style={styles.img}
                  src={social.image}
                />
                  <a href={ social.url} target='_blank' rel="noreferrer"> 
                    <Typography key={index} ml='4px'> {social.name} </Typography> 
                    </a>
                </Grid>
              </Grid>
              ) 
            }
          </Grid>
          <Grid item xs={12} sm={6} md={4} display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
            {
              Cards.map((card, index) => 
                <img
                  key={index}
                  alt='card'
                  src={card.image}
                  width='50px'
                  hegiht='50px'
                 
                />
              )
        }
      </Grid>
    </Grid>
  )
}

export default Footer