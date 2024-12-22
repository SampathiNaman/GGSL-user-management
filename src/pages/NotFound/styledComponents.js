import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const colors = {
  primary: "#ff7e5f",
  secondary: "#feb47b",
}

export const NotFoundWrapper = styled.div`
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFoundCard = styled.div`
  background-color: white;
  padding: 40px 60px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h1`
  color:${colors.primary};
  font-size: 6rem;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  color:${colors.secondary};
  font-size: 1.5rem;
  margin: 20px 0;
`;

export const StyledButton = styled(Button)`
  background-color:${colors.primary};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  
  &:hover {
    background-color:${colors.secondary};
  }
`;