import { combineReducers } from "redux";
import people from './PeopleReducer';
import user from './RegisterReducer';
export default combineReducers({people, user});


