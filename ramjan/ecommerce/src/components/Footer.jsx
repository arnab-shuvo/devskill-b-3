import { Grid, Typography } from '@mui/material'
import React from 'react'

const policys = ['Return policy', 'Search our store', 'Blog', 'Contact us', 'About us']
const socials = [
    {
        id: 1,
        name: 'Fcebook',
        image:'/images/facebookColor.png'
    },
    {
        id: 2,
        name: 'Twitter',
        image:'/images/twiter.png'
    },
    {
        id: 3,
        name: 'Linkdin',
        image:'/images/LinkdinColor.png'
    },
    {
        id: 4,
        name: 'Instagram',
        image:'/images/insta.png'
    }
]
const cards = [
    {
        id:1,
        image: '/images/master.png'
    },
    {
        id:2,
        image: '/images/payonner.png'
    },
    {
        id:3,
        image: '/images/paypal.png'
    },
    {
        id:4,
        image: '/images/visa.png'
    },
    
]
function Footer() {
  return (
      <Grid container> 
          <Grid item xs={ 12 } sm={6} md={4}>
              {
                  policys.map((policy, index) =>
                      <a href='#' style={{textDecoration:'none', color:'#010101'}}><Typography>  { policy} </Typography></a>
                  )
            }           
          </Grid>
         
          <Grid item xs={12} sm={6} md={4} display='flex' flexDirection='column'>
              {
                  socials.map((social, index) =>
                      <a href='#' style={{textDecoration:'none', color:'#010101'}}> <Typography> {social.name } </Typography>  </a>
                ) 
              }
          </Grid>

         
          <Grid item xs={12} sm={6} md={4} display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
              {
                  cards.map((card, index) => 
                      <img
                        key={card.id}
                        alt='card'
                          src={card.image}
                          width='50px'
                          hegiht='auto'
                          backgroundSize='cover'
                      />
                  )
            }
          </Grid>
          
    </Grid>
  )
}

export default Footer