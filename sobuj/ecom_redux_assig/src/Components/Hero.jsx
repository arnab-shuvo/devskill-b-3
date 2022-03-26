import React from 'react'
import styled from 'styled-components'
// import homeImage from '../Assets/men.jpg';
import homeImage from '../Assets/55.jpeg';
import promoImg1 from '../Assets/promo_1.jpeg';
import promoImg2 from '../Assets/promo_2.jpeg';

export default function Hero() {
  return (
    <Section id="hero">
      <div className="banner">
        <div className="background">
            <img src={homeImage} alt="" />  
        </div>
        <div className="content">
          <div className="title">
            <p>Limited Edition</p>
            <h1>Experience feel gratest with virtual reality just in <span>$599</span></h1>
            <button>Shop now</button>  
          </div>
          <div className="search">
              <div className="container">
                <label htmlFor="">Whom you looking for</label>
                <select name="category" id="prodCategory">
                  <option value="0">All</option>
                  <option value="1">Men</option>
                  <option value="2">Women</option>
                  <option value="3">Home &amp; Living</option>
                  <option value="4">Beauty</option>
                </select>
              </div>  
              <div className="container">
                <label htmlFor="">type of things you looking for</label>
                <select name="category" id="prodCategory">
                  <option value="0">All</option>
                  <option value="1">T-shirts</option>
                  <option value="2">Casual Shirts</option>
                  <option value="3">Formal Shirts</option>
                  <option value="4">Panjabee</option>
                </select>
              </div>  
              <div className="container">
                  <label htmlFor="">What are you looking for</label>
                  <input type="text" placeholder='Search your things' />  
              </div>
              <button>Explore Now</button>
          </div>
        </div>  
      </div>
      <div className="heroPromo">
        <img src={promoImg1} alt="" />  
        <img src={promoImg2} alt="" />  
      </div>
    </Section>
  )
}

const Section = styled.section`
  display:flex;
  justify-content:space-between ;
  /* align-items:center ; */
  margin-top:2rem ;
  .banner{
    position:relative;
    width:75%;
    height:100%;
    .background{
      height:100%;
      img{
        width:100%;
        filter: brightness(90%) ;
      }
      
    }
  }
  .heroPromo{
    width:25%;
    height:100%;
    top:0;
    justify-content:space-between ;
    display:flex;
    flex-direction:column ;
    align-items: center;
    display: inline-flex;
    /* align-self: center; */
    flex-direction: column;
    /* box-shadow: 10px 10px 10px 10px #aaaaaa; */
    /* z-index: 500; */
    padding-left: 1.3rem;
    height: auto;
    text-align: center;
    transition: 2s;
    img{
      width:100%;
    }
  }
  .content{
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    z-index: 3;
    
    display: flex;
    flex-direction:column;
    justify-content:center;
    gap:1rem;
    .title{
      text-align:left;
      margin-left:5.4rem;
      color:#0d7d81;
      h1{
        color:#1d1c1c;
        font-size: 2rem;
        width: 50%;
        line-height: 2.2rem;
        letter-spacing:0.15rem ;
        span{
          color:#fdbb05;
        }
      }
      p{
        /* padding: 0 30vw; */
        margin-top: 0.5rem;
        font-size:1.2rem;
      }
    }

  }
  .search{
    
    display:flex;
    background-color:#ffffffce;
    padding:0.5rem;
    margin: 1rem 2rem;
    border-radius:0.5rem ;
    bottom:2rem;
    .container{
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction: column;
      padding:0 1.5rem;
      label{
        font-size:1rem;
        color:#03045e;
      }
      input{
        background-color: transparent ;
        border:#ccc;
        color:black;
        padding:0.3rem;
        &::placeholder{
          color:black;
        }
        &:focus{
          outline:#ccc;
        }
      }
      
    }
    button{
        padding:0.5rem;
        cursor:pointer;
        border-radius:0.3rem ;
        border:none;
        color:white;
        background-color: #4361ee;
        text-transform:uppercase ;
        transition: 0.3s ease-in-out;
        &:hover{
          color:white;
          background-color: #3349a8;
        }
         
      }
  }
`;
