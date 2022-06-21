import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import ProfileReducer from './ProfileReducer';
import HomeReducer from './HomeReducer';

const AllReducers = combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  profile: ProfileReducer,
  home: HomeReducer,
});

export default AllReducers;
