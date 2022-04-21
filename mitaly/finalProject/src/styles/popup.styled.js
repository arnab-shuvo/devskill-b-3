import styled from "styled-components";

export const FormPopUp =styled.div`
display: ${props => props.display === "block" ? "block" : "none" };
position: fixed;
top: 25%;
left: 40%;
border: 3px solid #f1f1f1;
z-index: 9;
background-color: blue
a{
    
}
`;