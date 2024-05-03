export const formateDOB = (date: string) => {
  const newDate = new Date(date);
  return `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
};

export enum NavigationTabs {
  CREATECARD,
  COLLECTION,
}

export enum SortingParams {
  FirstName = 'firstname',
  LastName = 'lastname',
  Birthday = 'birthday',
  Empty = '',
}
