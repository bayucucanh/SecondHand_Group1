import { CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILED } from '../types';
import { changePassword } from '../../service/Api/auth';
import { setLoading } from './globalAction';

export const successChangePassword = (value) => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload: value,
});

export const failedChangePassword = () => ({
  type: CHANGE_PASSWORD_FAILED,
});

export const putChangePassword = (accessToken, payload) => async (dispatch) => {
  dispatch(setLoading(true));
  await changePassword(accessToken, payload).then((value) => {
    dispatch(successChangePassword(value.data));
    dispatch(setLoading(false));
    console.log('Change password success');
  }).catch((err) => {
    dispatch(failedChangePassword());
    dispatch(setLoading(false));
    console.log(err.message);
  });
};
