import styled from 'styled-components';
import {Title} from '../../GlobalStyles';
import {colors} from '../../styles/theme';

export const StyledCard = styled.div`
  background-color: white;
  max-width: unset;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid ${colors.primary};
  border-radius: 16px;
  padding: 12px;
  margin: 0 auto;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border-color: ${colors.dark};
  }

  @media (min-width: 768px) {
    max-width: 450px;
  }
`;

export const CardImg = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 1.5rem;
  border-radius: 20%;
`;

export const CardTitle = styled.h1`
  color: ${colors.dark};
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
  margin: 0;
`;

export const CardText = styled.p`
  color: ${colors.primary};
  margin: 0;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`