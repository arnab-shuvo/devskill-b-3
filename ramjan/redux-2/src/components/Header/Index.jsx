import { AppBar, Button, Container, Grid, Toolbar } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Banner from '../Banner/Banner'


const styles = {
  menue: {
    display: 'flex',
    color: '#fff',
    listStyle: 'none'
  },
  menueItem: {
    color: '#fff'
  },
  menueButtonBg: {
    background: '#fff',
    color: '#000000',
    marginLeft: '10px',
    marginRight: '10px'
  }
}

function Header() {
  const menues = ['', 'Dress', 'Glasses', 'Jacket']

  return (
    <>
    <AppBar position='sticky' style={{background:'#fff'}}>
      <Container maxWidth="xl">
        <Toolbar>
          <Grid container direction='row'>
            <Grid item sm={12} >
            <NavLink to='/'>
                <Button variant='contained' color='primary' style={styles.menueButtonBg}>  Home </Button>
            </NavLink>
            <NavLink to='/about'>
                <Button variant='contained' color='primary' style={styles.menueButtonBg}>  About Us </Button>
            </NavLink>
            <NavLink to='/privecy'>
                <Button variant='contained' color='primary' style={styles.menueButtonBg}>  Privecy Policy </Button>
            </NavLink>
            <NavLink to='/return'>
                <Button variant='contained' color='primary' style={styles.menueButtonBg}>  Return Policy </Button>
            </NavLink>
            <NavLink to='/products'>
                <Button variant='contained' color='primary' style={styles.menueButtonBg}>  Products  </Button>
            </NavLink>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
      </AppBar>
    <Banner />
    </>
  )
}

export default Header