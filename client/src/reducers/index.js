import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import userReducer from './user_reducer';
import historyReducer from './history_reducer';
import orderReducer from './order_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  history: historyReducer,
  order: orderReducer,
});

export default rootReducer;
