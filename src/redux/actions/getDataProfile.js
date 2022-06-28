import { GET_USER_SUCCESS, GET_USER_FAILED } from '../types';
import { getProfile } from '../../service/Api/auth';
import { setLoading } from './globalAction';

export const successGetProfile = (value) => ({
  type: GET_USER_SUCCESS,
  payload: value,
});

export const failedGetProfile = () => ({
  type: GET_USER_FAILED,
});

export const getDataProfile = (payload) => async (dispatch) => {
  dispatch(setLoading(true));
  await getProfile(payload)
    .then((value) => {
      dispatch(successGetProfile(value.data));
      dispatch(setLoading(false));
      console.log('Get profile data berhasil');
    })
    .catch((err) => {
      dispatch(failedGetProfile());
      dispatch(setLoading(false));
      console.log(err.message);
    });
};
