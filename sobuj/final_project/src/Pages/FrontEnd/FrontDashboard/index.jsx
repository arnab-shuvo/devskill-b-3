import React, { useState } from 'react';
import styled from "styled-components";
import { Container } from "../../../Components/Styles/Common.styles";
import { Link } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';

const Page404 = () =>{

    return <>
        <Navbar />
        <Container>
            

                <h1>Welcome to Dashboard</h1>
            
        </Container>
        <Link to={`/`} >Back to Home</Link>
    </>
}

export default Page404;