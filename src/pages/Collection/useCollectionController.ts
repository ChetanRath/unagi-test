import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchCollection } from '../../lib/collection';
import { CardDetails } from '../../utils/type';
import { ROUTES } from '../../utils/constant';

export const useCollectionController = () => {
  const [collection, setCollection] = useState<CardDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [sortBy, setSortBy] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchCollection();
      if (data.length === 0) {
        setError('No data available. Create a card for a player!');
      } else {
        setCollection(data);
      }
    } catch (error) {
      alert('Error fetching data. Please try again later.');
    }
    setLoading(false);
  };

  const handleCreateCard = () => history.push(ROUTES.CREATE_CARD);

  const handleFilterBy = (event: ChangeEvent<HTMLSelectElement>) => setSortBy(event.target.value);

  const sortedResults = useMemo(() => {
    let sortedCollection = [...collection];
    switch (sortBy) {
      case 'birthday':
        sortedCollection = [...collection].sort(
          (a, b) =>
            new Date(a.player.birthday).getTime() -
            new Date(b.player.birthday).getTime()
        );
        break;
      case 'firstname':
        sortedCollection = [...collection].sort((a, b) =>
          a.player.firstname.localeCompare(b.player.firstname)
        );
        break;
      case 'lastname':
        sortedCollection = [...collection].sort((a, b) =>
          a.player.lastname.localeCompare(b.player.lastname)
        );
        break;
      default:
        sortedCollection = collection;
        break;
    }
    return sortedCollection;
  }, [collection, sortBy])

  return {
    loading,
    error,
    handleCreateCard,
    sortBy,
    handleFilterBy,
    sortedResults,
  };
};
