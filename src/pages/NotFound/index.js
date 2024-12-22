import React from 'react';
import { useNavigate } from "react-router-dom";
import { NotFoundWrapper, NotFoundCard, Title, Subtitle, StyledButton } from './styledComponents';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/", { replace: true});
  };

  return (
    <NotFoundWrapper>
      <NotFoundCard>
        <Title>404</Title>
        <Subtitle>Oops! Page Not Found</Subtitle>
        <StyledButton variant='danger' onClick={handleGoBack}>Go Home</StyledButton>
      </NotFoundCard>
    </NotFoundWrapper>
  );
};

export default NotFound;
