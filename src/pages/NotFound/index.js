import React from 'react';
import { Link } from "react-router-dom";
import { NotFoundWrapper, NotFoundCard, Title, Subtitle, StyledButton } from './styledComponents';

const NotFound = () => 
   (
    <NotFoundWrapper>
      <NotFoundCard>
        <Title>404</Title>
        <Subtitle>Oops! Page Not Found</Subtitle>
        <Link to="/">
          <StyledButton variant='danger'>Go Home</StyledButton>
        </Link>
      </NotFoundCard>
    </NotFoundWrapper>
  );


export default NotFound;
