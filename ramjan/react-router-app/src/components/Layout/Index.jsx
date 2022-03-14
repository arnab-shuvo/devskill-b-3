import { Grid } from '@mui/material'
import React from 'react'
import Footer from '../Footer/Index'
import Header from '../Header/Index'

function Layout({ children}) {
  return (
      <>
          <Grid container>
              <Grid item xs={12}>
                <Header />
                    { children }
                <Footer/>
              </Grid>
          </Grid>
    </>
  )
}

export default Layout