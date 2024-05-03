import React, { FC } from 'react';
import { Loader, LoadingContainer } from './style';

const LoadingIndicator: FC = () => (
  <LoadingContainer>
    <Loader />
  </LoadingContainer>
);

export default LoadingIndicator;
