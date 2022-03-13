import { Search } from '@material-ui/icons';
import React from 'react'
import Style from 'styled-components'; 

const Container = Style.div`
    height:60px;
    background-color: #7b37be;
`
const Wrapper = Style.div`
    padding: 10px 20px; 
    display:flex;
    justify-content: space-between; 
`
const Left = Style.div`
    flex: 1;
    display: flex; 
`
const Language = Style.span`
    font-size: 14px;
    cursor: pointer;
    padding-top:10px;
`
const SearchContainer = Style.div`
    border: 0.5px solid lightgrey;
    padding:5px;
    display: flex;  
    align-items:center;
    margin-left:25px;
    padding:5px 5px;
    padding-right:5px;
`
const Input = Style.input`
    border:none;
    padding: 8px 5px; 
    margin-right:10px;
`

const Center = Style.div`
    flex: 1; 
`
const Right = Style.div`
    flex: 1; 
`

function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search/>
                </SearchContainer>
            </Left>
            <Center>Center</Center>
            <Right>Right</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;
