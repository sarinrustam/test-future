import {combineReducers} from "redux";
import {reducer as users} from './users/users';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.USERS]: users,
});