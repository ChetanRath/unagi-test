import { URLS } from '../utils/constant';
import { CardProps } from '../utils/type';

export const fetchCollection = async (): Promise<CardProps[]> => {
  try {
    const response = await fetch(`${URLS.API_BASE_URL}/cards`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    alert(`Error fetching data: ${ error}`);
    return [];
  }
};
