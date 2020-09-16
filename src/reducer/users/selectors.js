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

export const getSortedByName = (state) => {
  return state[NameSpace.USERS].sortedByName;
};

export const getSortedByDirection = (state) => {
  return state[NameSpace.USERS].sortedByDirection;
};

export const getFindPhrase = (state) => {
  return state[NameSpace.USERS].findPhrase;
};

export const getFilteredUsersData = createSelector(
  getUsersData,
  getFindPhrase,
  (resultOne, resultTwo) => {
    if (!resultTwo) {
      return resultOne;
    }

    return resultOne.filter((item) => {
      for (let key in item) {
        if (item[key].toString().includes(resultTwo)) {
          return true;
        }
      }

      return false;
    });
  }
);

export const getSortedUsersData = createSelector(
  getFilteredUsersData,
  getSortedByName,
  getSortedByDirection,
  (resultOne, resultTwo, resultThree) => {
    return resultOne.slice().sort((a, b) => {
      if (resultThree === 'up') {
        return a[resultTwo] > b[resultTwo] ? 1 : -1;
      }
      if (resultThree === 'down') {
        return b[resultTwo] > a[resultTwo] ? 1 : -1;
      }
      return 0;
    });
  }
);

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