import React from 'react'
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to={'/'}>
        ISY Ecom 
      </Link>  
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <>
    <FooterContainer>
      <ul className='links'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/all-products'}>All Products</Link>
        </li>
        <li>
          <Link to={'/'}>Recommmend</Link>
        </li>
        <li>
          <Link to={'/'}>Testimonial</Link>
        </li>
        <li>
          <Link to={'/'}>Contact</Link>
        </li>
      </ul>
      <ul className="social__links">
        <li><BsFacebook /></li>
        <li><BsLinkedin /></li>
        <li><AiFillInstagram /></li>
      </ul>
    </FooterContainer>
     <Copyright />
     
     </>
  )
}

const FooterContainer = styled.footer`
  width:100%;
  display:flex;
  justify-content: space-evenly;
  background-color: #f8f4f7;
  padding: 2.5rem;
  ul{
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li{
      a{
        text-decoration: none;
        color:purple;
        transition: 0.3s ease-in-out;
        &:hover{
            color: #f7a03e;
          }
        }
        svg{
          font-size: 1.3rem;
          transition:0.3s ease-in-out;
          &:hover{
            color: #f7a03e;
          }
        }
    }
  }
`;