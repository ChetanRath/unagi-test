import React, { FC, Suspense, lazy } from 'react';
import { CardDetails as CardProps } from '../../utils/type';
import LoadingIndicator from '../loader';
import { formateDOB } from '../../utils/helpers';
import { CardContainer, CardDetails, PlayerDOB, PlayerName } from './style';

const LazyImage = lazy(() => import('./lazyImage'));

const Card: FC<CardProps> = ({ id, player }) => {
  const { firstname, lastname, birthday } = player;

  return (
    <CardContainer>
      <Suspense fallback={<LoadingIndicator />}>
        <LazyImage id={id} />
      </Suspense>
      <CardDetails>
        <PlayerName>{`${firstname} ${lastname}`}</PlayerName>
        <PlayerDOB>DOB: {formateDOB(birthday)}</PlayerDOB>
      </CardDetails>
    </CardContainer>
  );
};

export default Card;
