
import React from 'react'
import styled from 'styled-components';
import logo from "../Assets/logo.png";
import {Button} from './Styles/Button';
import { useNavigate } from "react-router-dom"; 

export default function Navbar() {
  const navigate = useNavigate();

  const toProducts =() =>{
    navigate("/products");
  }
  const toHome =() =>{
    navigate("/");
  }

  return (
    <>
        <Nav>
          <div className='brand'>
              <div className='container'  >
                {/* <img src={logo} width="110px" alt=""/> */}
                Isy<span className=''>Ecom</span>
              </div>
              <div className="toggle"></div>            
          </div>
          <ul>
            <li><a href="#home" onClick={toHome}>Home</a></li>
            {/* <li><a onClick={toProducts}>Products</a></li> */}
            <li><a href="#services">Services</a></li>
            <li><a href="#recommend">Recommend</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
          <Button >Connect</Button>
        </Nav>
    </>
  )
}

const Nav = styled.nav`
  display:flex;
  justify-content:space-between ;
  align-items:center ;
  .brand{
    .container{
      cursor:pointer;
      display: flex;
      justify-content:center;
      gap: 0.4rem;
      font-size:2.5rem;
      font-weight: 900;
      text-transform: capitalize ;
      color:#532c77 ;
      bottom:0;
    }
    span{
      color:#e6ab16;
    }
    .toggle{
      display: none;
    }
  }
  ul{
    display:flex;
    list-style-type:none ;
    gap:1rem;
    li{
      a{
        text-decoration:none ;
        color: #532c77;
        font-size:1.2rem;
        transition: 0ms.1s ease-in-out;
        &:hover{
          color:#e6ab16;
        }
      }
      &:first-of-type{
        a {
          color:#e6ab16;
          font-weight:900 ;
        }
      }
    }
    
  }
  
`;