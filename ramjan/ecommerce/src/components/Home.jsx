
import { Grid } from '@mui/material'
import React from 'react'
import AppBar from './AppBar'
import Banner from './Banner'
import Footer from './Footer'
import MidBanner from './MidBanner'
import Products from './Products'
import Promo from './Promo'
import Searchbar from './Searchbar'

function Home() {
  return (
          <Grid>
            <Grid item>
              <Searchbar />
              <AppBar />
              <Banner />
              <Promo />
              <MidBanner />
              <Products />
              <Footer/>
            </Grid>
          </Grid> 
  )
}

export default Home