import styled from 'styled-components';
import { colors } from '../../styles/theme';


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
