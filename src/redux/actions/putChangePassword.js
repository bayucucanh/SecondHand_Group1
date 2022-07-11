import i18n from 'i18next';
import { CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILED } from '../types';
import { changePassword } from '../../service/Api/auth';
import { setLoading } from './globalAction';
import { showSuccess, showDanger } from '../../utils';

export const successChangePassword = (value) => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload: value,
});

export const failedChangePassword = () => ({
  type: CHANGE_PASSWORD_FAILED,
});

export const putChangePassword = (accessToken, payload, navigation) => async (dispatch) => {
  dispatch(setLoading(true));
  await changePassword(accessToken, payload).then((value) => {
    dispatch(successChangePassword(value.data));
    dispatch(setLoading(false));
    navigation.pop(2);
    showSuccess(i18n.t('successChangePassword'));
    console.log('Change password success');
  }).catch((err) => {
    dispatch(failedChangePassword());
    dispatch(setLoading(false));
    showDanger(i18n.t('failedChangePassword'));
    console.log(err.message);
  });
};
