import React, { FC } from 'react';

import Card from '../../components/card';
import LoadingIndicator from '../../components/loader';
import useCollectionController from './useCollectionController';
import { SortingParams } from '../../utils/helpers';
import {
  Button,
  CardContainer,
  ErrorMessage,
  GridContainer,
  SelectContainer,
} from '../../styled/collection';

const Collection: FC = () => {
  const {
    loading,
    error,
    sortedResults,
    sortBy,
    handleFilterBy,
    handleCreateCard,
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
              <option value={SortingParams.Empty}></option>
              <option value={SortingParams.Birthday}>Birthday</option>
              <option value={SortingParams.FirstName}>First Name</option>
              <option value={SortingParams.LastName}>Last Name</option>
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

export default Collection;
