import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Cards, Policys, Socials } from '../../lib/Data/Data'
const styles = {
  marginHorizontal: {
      marginTop: '20px',
      marginBottom: '20px'
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
                <Typography key={index}> {social.name } </Typography> 
              ) 
            }
          </Grid>

          <Grid item xs={12} sm={6} md={4} display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
            {
              Cards.map((card, index) => 
                <img
                  key={card.id}
                  alt='card'
                  src={card.image}
                  width='50px'
                  hegiht='50px'
                  backgroundsize='cover'
                />
              )
            }
          </Grid>
    </Grid>
  )
}

export default Footer