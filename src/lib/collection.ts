import { URLS } from '../utils/constant';
import { CardDetails } from '../utils/type';

export const fetchCollection = async (): Promise<CardDetails[]> => {
  try {
    const response = await fetch(`${URLS.API_BASE_URL}/cards`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return (await response.json()) as CardDetails[]; // Didnt much like it. generally backend types are shared with FE but in scope of this task this is okay.
  } catch (error) {
    alert(`Error fetching data: ${error}`);
    return [];
  }
};
