import { combineReducers } from 'redux';
import accountReducer from './account';
import authReducer from './auth';

const rootReducer = combineReducers({
  account: accountReducer,
  auth: authReducer
});

export default rootReducer;
