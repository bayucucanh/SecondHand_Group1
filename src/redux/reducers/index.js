import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';

const AllReducers = combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
});

export default AllReducers;
