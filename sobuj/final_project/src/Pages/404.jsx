import React, { useState } from 'react';
import styled from "styled-components";
import { Container } from "../Components/Styles/Common.styles";
import { Error404 } from "../Components/Styles/Common.styles";
import { Link } from 'react-router-dom';

const Page404 = () =>{

    return <>
        <Container>
            <Error404>
                <h1>404!</h1>
            </Error404>
            
        </Container>
        <Link to={`/`} >Back to Home</Link>
    </>
}

export default Page404;