import { combineReducers } from "redux";
import people from './PeopleReducer';
import user from './RegisterReducer';
import login from './LoginReducer';
import receipts from './ReceiptsReducer';
import savedReceipts from './SendReceiptsReducer';
export default combineReducers({people, user, login, receipts, savedReceipts});


