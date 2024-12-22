import styled from 'styled-components';
import { colors } from '../../styles/theme';
import { Button, Card } from "react-bootstrap";

export const Background = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${colors.light}, ${colors.primary});
`;

export const StyledCard = styled(Card)`
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 20px;
`;

export const LogoFrame = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${colors.secondary};
  border-radius: 50%;
  margin: 0 auto;
  text-align: center;
`;

export const Logo = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 0;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.primary};
  text-align: center;
  margin-top: 1rem;
`;

export const LoginButton = styled(Button)`
  backgroundColor: ${colors.primary},
  border: "none",
`;

export const ErrorMessage = styled.div`
  color: #d8000c;
  border: none;
  text-align: center;
  margin-top: 1rem;
`;