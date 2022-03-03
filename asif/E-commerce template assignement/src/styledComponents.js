import styled from "styled-components";

export const Button = styled.button`
  padding: 1em 2em;
  color: white;
  font-weight: bold;
  background-color: blue;
  border: none;
  border-radius: 1em;
  transition: 0.5s;
  cursor: pointer;
  display: block;
  &:hover {
    background-color: grey;
  }
`;
