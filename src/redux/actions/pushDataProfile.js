import { UPDATE_USER_SUCCESS, UPDATE_USER_FAILED } from '../types';
import { updateProfile } from '../../service/Api/auth';
import { setLoading } from './globalAction';

export const successPutProfile = (value) => ({
  type: UPDATE_USER_SUCCESS,
  payload: value,
});

export const failedPutProfile = () => ({
  type: UPDATE_USER_FAILED,
});

export const putDataProfile = (accessToken, payload) => async (dispatch) => {
  dispatch(setLoading(true));
  await updateProfile(accessToken, payload)
    .then((value) => {
      dispatch(successPutProfile(value.data));
      dispatch(setLoading(false));
      console.log('Put profile data berhasil');
    })
    .catch((err) => {
      dispatch(failedPutProfile());
      dispatch(setLoading(false));
      console.log(err);
    });
};
