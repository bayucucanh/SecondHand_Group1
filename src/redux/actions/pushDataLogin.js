import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILED } from '../types';
import { API_LOGIN } from '../../config/api';
import { successRegister } from './pushDataRegister';
import Auth from '../../service/Auth';

export const successLogin = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const failedLogin = () => ({
  type: LOGIN_FAILED,
});

export const loginUser = (email, password, navigation) => async (dispatch) => {
  await axios
    .post(API_LOGIN, { email, password })
    .then((response) => {
      dispatch(successLogin(response.data));
      dispatch(successRegister(false));
      Auth.setAccount(response.data);
      navigation.replace('MainApp');
    })
    .catch((err) => {
      dispatch(failedLogin());
      console.log(err.message);
    });
};
