/* eslint-disable no-unused-vars */
import axios from 'axios';
import {LOGIN_SUCCESS, LOGIN_FAILED} from '../types';
import {API_LOGIN} from '../../config/api/index.';
import {successRegister} from '../actions/pushDataRegister';

export const successLogin = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const failedLogin = () => ({
  type: LOGIN_FAILED,
});

export const checkLogin = payload => async dispatch => {
  await axios
    .post(API_LOGIN, payload)
    .then(response => {
      dispatch(successLogin(response.data));
      dispatch(successRegister(false));
      console.log('Login Berhasil');
    })
    .catch(err => {
      dispatch(failedLogin());
      console.log(err.message);
    });
};
