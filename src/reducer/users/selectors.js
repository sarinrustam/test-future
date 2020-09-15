import NameSpace from '../name-space';
import { createSelector } from "reselect";
import { MAX_USERS_ITEMS } from '../../utils/utils';

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

export const getCurrentPage = (state) => {
  return state[NameSpace.USERS].currentPage;
};

export const getPaginations = createSelector(
  getUsersData,
  (resultOne) => {
    const countPage = Math.ceil(resultOne.length / MAX_USERS_ITEMS);
    const newArray = [];

    for (let i = 1; i <= countPage; i++) {
      newArray.push(i);
    }

    return newArray;
  }
);