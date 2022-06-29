import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import ProfileReducer from './ProfileReducer';
import HomeReducer from './HomeReducer';
import GlobalReducers from './GlobalReducer';
import DetailReducer from './DetailReducer';

const AllReducers = combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  profile: ProfileReducer,
  home: HomeReducer,
  global: GlobalReducers,
  detail: DetailReducer,
});

export default AllReducers;
