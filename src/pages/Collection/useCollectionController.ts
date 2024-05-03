import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchCollection } from '../../lib/collection';
import { CardDetails } from '../../utils/type';
import { ROUTES } from '../../utils/constant';
import { SortingParams } from '../../utils/helpers';

const useCollectionController = () => {
  const [collection, setCollection] = useState<CardDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [sortBy, setSortBy] = useState<SortingParams>(SortingParams.Empty);
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const cardData = await fetchCollection();
      if (cardData.length === 0) {
        setError('No cardData available. Create a card for a player!');
      } else {
        setCollection(cardData);
      }
    } catch (error) {
      setError('Error fetching cardData. Please try again later.');
    }
    setLoading(false);
  };

  const handleCreateCard = () => history.push(ROUTES.CREATE_CARD);

  const handleFilterBy = (event: ChangeEvent<HTMLSelectElement>) =>
    setSortBy(event.target.value as SortingParams);

  const sortedResults = useMemo(() => {
    /**
     * This logic is a mimic of the sorting functionality that comes from BE
     */
    let sortedCollection = [...collection];
    switch (sortBy) {
      case SortingParams.Birthday:
        sortedCollection = [...collection].sort(
          (a, b) =>
            new Date(a.player.birthday).getTime() -
            new Date(b.player.birthday).getTime()
        );
        break;
      case SortingParams.FirstName:
        sortedCollection = [...collection].sort((a, b) =>
          a.player.firstname.localeCompare(b.player.firstname)
        );
        break;
      case SortingParams.LastName:
        sortedCollection = [...collection].sort((a, b) =>
          a.player.lastname.localeCompare(b.player.lastname)
        );
        break;
      default:
        sortedCollection = collection;
        break;
    }
    return sortedCollection;
  }, [collection, sortBy]);

  return {
    loading,
    error,
    sortedResults,
    sortBy,
    handleFilterBy,
    handleCreateCard,
  };
};

export default useCollectionController;
