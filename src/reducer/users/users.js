import NameSpace from '../name-space';

const initialState = {
  usersData: [],
  isUsersDataLoading: false,
  isUsersDataError: false,
  usersDataCount: null,
};

const ActionType = {
  SET_USERS_DATA: 'SET_USERS_DATA',
  SET_USERS_DATA_LOADING: 'SET_USERS_DATA_LOADING',
  SET_USERS_DATA_ERROR: 'SET_USERS_DATA_ERROR',
  SET_USERS_DATA_COUNT: 'SET_USERS_DATA_COUNT',
};

const ActionCreator = {
  setUsersData: (data) => {
    return {
      type: ActionType.SET_USERS_DATA,
      payload: data,
    };
  },
  setUsersDataLoading: (status) => {
    console.log('ACTIONCFE', status)
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
      }
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Operation};