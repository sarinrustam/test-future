import NameSpace from '../name-space';

const initialState = {
  usersData: [],
  isUsersDataLoading: false,
  isUsersDataError: false,
  usersDataCount: null,
  currentPage: 1,
  sortedByName: null,
  sortedByDirection: null,
  findPhrase: '',
};

const ActionType = {
  SET_USERS_DATA: 'SET_USERS_DATA',
  SET_USERS_DATA_LOADING: 'SET_USERS_DATA_LOADING',
  SET_USERS_DATA_ERROR: 'SET_USERS_DATA_ERROR',
  SET_USERS_DATA_COUNT: 'SET_USERS_DATA_COUNT',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_SORTED_BY_NAME: 'SET_SORTED_BY_NAME',
  SET_SORTED_BY_DIRECTION: 'SET_SORTED_BY_DIRECTION',
  SET_FIND_PHRASE: 'SET_FIND_PHRASE',
  ADD_NEW_DATA: 'ADD_NEW_DATA',
};

const ActionCreator = {
  setUsersData: (data) => {
    return {
      type: ActionType.SET_USERS_DATA,
      payload: data,
    };
  },
  setUsersDataLoading: (status) => {
    return {
      type: ActionType.SET_USERS_DATA_LOADING,
      payload: status,
    };
  },
  setUsersDataError: (error) => {
    return {
      type: ActionType.SET_USERS_DATA_ERROR,
      payload: error,
    };
  },
  setUsersDataCount: (count) => {
    return {
      type: ActionType.SET_USERS_DATA_COUNT,
      payload: count,
    };
  },
  setCurrentPage: (payload) => {
    return {
      type: ActionType.SET_CURRENT_PAGE,
      payload,
    };
  },
  setSortedByName: (payload) => {
    return {
      type: ActionType.SET_SORTED_BY_NAME,
      payload,
    };
  },
  setSortedByDirection: (payload) => {
    return {
      type: ActionType.SET_SORTED_BY_DIRECTION,
      payload,
    };
  },
  setFindPhrase: (payload) => {
    return {
      type: ActionType.SET_FIND_PHRASE,
      payload,
    };
  },
  addNewData: (payload) => {
    return {
      type: ActionType.ADD_NEW_DATA,
      payload,
    };
  },
};

const Operation = {
  loadUsersData: () => (dispatch, getState, api) => {
    const count = getState()[NameSpace.USERS].usersDataCount;
    
    dispatch(ActionCreator.setUsersDataLoading(true));

    api.get(`?rows=${count}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
      .then((response) => {
        dispatch(ActionCreator.setUsersData(response.data));
        dispatch(ActionCreator.setUsersDataLoading(false));
      })
      .catch((error) => {
        dispatch(ActionCreator.setUsersDataError(true));
        dispatch(ActionCreator.setUsersDataLoading(false));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USERS_DATA:
      return {
        ...state,
        usersData: action.payload,
      };
    case ActionType.SET_USERS_DATA_LOADING:
      return {
        ...state,
        isUsersDataLoading: action.payload,
      };
    case ActionType.SET_USERS_DATA_ERROR:
      return {
        ...state,
        isUsersDataError: action.payload,
      };
    case ActionType.SET_USERS_DATA_COUNT:
      return {
        ...state,
        usersDataCount: action.payload,
      };
    case ActionType.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ActionType.SET_SORTED_BY_NAME:
      return {
        ...state,
        sortedByName: action.payload,
      };
    case ActionType.SET_SORTED_BY_DIRECTION:
      return {
        ...state,
        sortedByDirection: action.payload,
      };
    case ActionType.SET_FIND_PHRASE:
      return {
        ...state,
        findPhrase: action.payload,
      };
    case ActionType.ADD_NEW_DATA:
      return {
        ...state,
        usersData: [
          action.payload,
          ...state.usersData
        ],
      }
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Operation};