/* eslint-disable no-unused-vars */
import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAILED } from '../types';
import { API_REGISTER } from '../../config/api';

export const successRegister = (value) => ({
  type: REGISTER_SUCCESS,
  payload: value,
});

export const failedRegister = () => ({
  type: REGISTER_FAILED,
});

export const checkRegister = (payload) => async (dispatch) => {
  await axios
    .post(API_REGISTER, payload)
    .then(() => {
      dispatch(successRegister(true));
      console.log('Register Berhasil');
    })
    .catch((err) => {
      dispatch(failedRegister());
      console.log(err.message);
    });
};
