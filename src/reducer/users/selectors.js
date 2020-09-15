import NameSpace from '../name-space';

export const getUsersData = (state) => {
  return state[NameSpace.USERS].usersData;
};

export const getUsersDataLoading = (state) => {
  return state[NameSpace.USERS].isUsersDataLoading;
};

export const getUsersDataError = (state) => {
  return state[NameSpace.USERS].isUsersDataError;
};

export const getUsersDataCount = (state) => {
  return state[NameSpace.USERS].usersDataCount;
};