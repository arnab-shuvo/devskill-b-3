import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    background-color: #eee ;
    width:100%;
`;

export const Error404 = styled.div`
width:50%;
padding: 2rem;
border:1px solid #ccc;
min-height: 300px;
text-align:center;
h1{
    font-size:10rem;
    color:red;
}
`;