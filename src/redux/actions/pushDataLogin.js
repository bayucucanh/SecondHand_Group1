import { LOGIN_SUCCESS, LOGIN_FAILED } from '../types';
import { successRegister } from './pushDataRegister';
import { login } from '../../service/Api/auth';
import Auth from '../../service/Auth';
import { setLoading } from './globalAction';

export const successLogin = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const failedLogin = () => ({
  type: LOGIN_FAILED,
});

export const loginUser = (email, password, navigation) => async (dispatch) => {
  dispatch(setLoading(true));
  await login(email, password)
    .then((response) => {
      dispatch(successLogin(response.data));
      dispatch(successRegister(false));
      dispatch(setLoading(false));
      Auth.setAccount(response.data);
      navigation.replace('MainApp');
    })
    .catch((err) => {
      dispatch(failedLogin());
      dispatch(setLoading(false));
      console.log(err.message);
    });
};
