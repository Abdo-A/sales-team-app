import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import dcReducer from './dcReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  dc: dcReducer,
});
