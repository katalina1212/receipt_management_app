import { combineReducers } from "redux";
import user from './RegisterReducer';
import login from './LoginReducer';
import receipts from './ReceiptsReducer';
import savedReceipts from './SendReceiptsReducer';
export default combineReducers({user, login, receipts, savedReceipts});


