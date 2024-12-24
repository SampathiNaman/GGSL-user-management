import { createGlobalStyle, styled } from "styled-components";
import { Card } from "react-bootstrap";
import {colors} from "./styles/theme";

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

export const StyledCard = styled(Card)`
  max-width: ${props => props.maxwidth || '500px' };
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.size || '1.5rem' };
  font-weight: bold;
  color: ${props => props.color || colors.primary};
  text-align: center;
  margin-top: 1rem;
`;

export const Button = styled.button`
  color: ${props => props.color || 'white'};
  background-color: ${colors.primary};
  border: none;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
  padding: 6px 12px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const IconButton = styled(Button)`
  color: ${colors.primary};
  background-color: transparent;

  &:hover {
    background-color: ${colors.light};
  }
  `;
  
  export const StyledButton = styled(Button)`

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
