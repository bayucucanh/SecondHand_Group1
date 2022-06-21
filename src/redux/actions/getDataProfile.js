import axios from 'axios';
import { GET_USER_SUCCESS, GET_USER_FAILED } from '../types';
import { API_GET_PROFILE } from '../../config/api';

export const successGetProfile = (value) => ({
  type: GET_USER_SUCCESS,
  payload: value,
});

export const failedGetProfile = () => ({
  type: GET_USER_FAILED,
});

export const getDataProfile = (payload) => async (dispatch) => {
  await axios
    .get(API_GET_PROFILE, {
      headers: {
        access_token: payload,
      },
    })
    .then((value) => {
      dispatch(successGetProfile(value.data));
      console.log('Get profile data berhasil');
    })
    .catch((err) => {
      dispatch(failedGetProfile());
      console.log(err.message);
    });
};
