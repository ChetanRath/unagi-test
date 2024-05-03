import React, { FC } from 'react';

import Card from '../../components/card';
import LoadingIndicator from '../../components/loader';
import {
  Button,
  CardContainer,
  ErrorMessage,
  GridContainer,
  SelectContainer,
} from '../../styled/collection';
import { useCollectionController } from './useCollectionController';

export const Collection: FC = () => {
  const {
    loading,
    error,
    sortedResults,
    sortBy,
    handleFilterBy,
    handleCreateCard
  } = useCollectionController();
  
  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : error ? (
        <ErrorMessage>
          {error}
          <Button onClick={handleCreateCard}>Create a card</Button>
        </ErrorMessage>
      ) : (
        <>
          <SelectContainer>
            <select value={sortBy} onChange={handleFilterBy}>
              <option value=""></option>
              <option value="birthday">Birthday</option>
              <option value="firstname">First Name</option>
              <option value="lastname">Last Name</option>
            </select>
          </SelectContainer>
          <GridContainer>
            {sortedResults.map((card) => (
              <CardContainer key={card.id}>
                <Card id={card.id} player={card.player} />
              </CardContainer>
            ))}
          </GridContainer>
        </>
      )}
    </>
  );
};
