import styled from 'styled-components';

export const Nav = styled.nav`
  display:flex;
  justify-content:left;
  align-items:center ;
  .brand{
    .container{
      cursor:pointer;
      display: flex;
      justify-content:left;
      gap: 0.4rem;
      font-size:2.5rem;
      font-weight: 900;
      text-transform: capitalize ;
      color:#532c77 ;
      bottom:0;
      width:400px;
    }
    span{
      color:#e6ab16;
    }
    .toggle{
      display: none;
    }
  }
  @media (min-width: 699px) and (max-width:1000px){
      .brand {
        .container{
          max-width: 200px;
        }          
      }
  }
  @media (max-width: 1200px){
      .brand {
        .container{
          max-width: 300px;
        }          
      }
  }
  .header {
      display: block;
      .header__top {
          padding: 25px 0;
          background-color: #fcb800;
          border-bottom: 1px solid rgba(0,0,0,.15);
          .ps-container {
              display: flex;
              flex-flow: row nowrap;
              max-width: 1650px;
              margin: 0 auto;
              padding: 0 15px;
          }
          @media (max-width: 1680px){
            .ps-container {
                padding: 0 30px;
                max-width: 100%;
            }
            
          }
            
      }
      .header__left {
          max-width: 300px;
          display: flex;
          align-items: center;
      }
      .header__right {
          max-width: 370px;
      }
      .header__center{

      }
      .header__actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
  } 

  .ps-form--quick-search {
      display: flex;
      flex-flow: row nowrap;
      position: relative;
  }

  ul{
    display:flex;
    list-style-type:none ;
    gap:1rem;
    li{
      a{
        text-decoration:none ;
        color: #FFFFFF; //532c77
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