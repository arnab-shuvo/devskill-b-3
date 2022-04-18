import Container from '@mui/material/Container';
import React from 'react';
import Footer from '../Footer/Index';
import Header from '../Header/Index';


function Layout({ children}) {
 
    
    return (
            <Container>
                <Header />
                    {children }
                <Footer/>   
            </Container>    
    )
  }
  
  export default Layout