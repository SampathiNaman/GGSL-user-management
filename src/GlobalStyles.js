import { createGlobalStyle, styled } from "styled-components";
import {colors} from "./styles/theme";
import { Button } from "react-bootstrap";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: "Roboto", "Arial", sans-serif;
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
    
code {
  font-family: 'Courier New', 'Courier', monospace;
}

* {
  box-sizing: border-box;
}
`;

export const Background = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, ${colors.light}, ${colors.primary});
`;


export const Title = styled.h1`
  font-size: ${(props) => props.size || '1.5rem' };
  font-weight: bold;
  color: ${props => props.color || colors.primary};
  text-align: center;
  margin-top: 1rem;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  padding: 4px 8px;

  &:hover {
    background-color: ${colors.light};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  `;
  
  export const StyledButton = styled(IconButton)`
  color: white;
  background-Color: ${colors.primary};
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;

  &:hover {
    background-color: ${colors.primary};
  }

  &:active {
    background-color: ${colors.secondary};
  }
`;


export const ErrorMessage = styled.div`
  color: #d8000c;
  border: none;
  text-align: center;
  margin-top: 1rem;
`;

export default GlobalStyles;
