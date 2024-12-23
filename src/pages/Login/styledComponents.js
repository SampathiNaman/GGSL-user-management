import styled from 'styled-components';
import { colors } from '../../styles/theme';
import { Card } from "react-bootstrap";

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
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 14px;
  margin-bottom: 0;
`;
