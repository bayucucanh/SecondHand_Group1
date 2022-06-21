import axios from 'axios';
import { UPDATE_USER_SUCCESS, UPDATE_USER_FAILED } from '../types';
import { API_PUT_PROFILE } from '../../config/api';

export const successPutProfile = (value) => ({
  type: UPDATE_USER_SUCCESS,
  payload: value,
});

export const failedPutProfile = () => ({
  type: UPDATE_USER_FAILED,
});

export const putDataProfile = (accessToken, payload) => async (dispatch) => {
  const data = new FormData();
  data.append('full_name', 'hah');
  await axios
    .put(API_PUT_PROFILE, payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        access_token: accessToken,
      },
    })
    .then((value) => {
      dispatch(successPutProfile(value.data));
      console.log('Put profile data berhasil');
    })
    .catch((err) => {
      dispatch(failedPutProfile());
      console.log(err);
    });
};
