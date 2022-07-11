import i18n from 'i18next';
import { UPDATE_USER_SUCCESS, UPDATE_USER_FAILED } from '../types';
import { updateProfile } from '../../service/Api/auth';
import { setLoading } from './globalAction';
import { showSuccess, showDanger } from '../../utils';

export const successPutProfile = (value) => ({
  type: UPDATE_USER_SUCCESS,
  payload: value,
});

export const failedPutProfile = () => ({
  type: UPDATE_USER_FAILED,
});

export const putDataProfile = (accessToken, payload, navigation) => async (dispatch) => {
  dispatch(setLoading(true));
  await updateProfile(accessToken, payload)
    .then((value) => {
      dispatch(successPutProfile(value.data));
      dispatch(setLoading(false));
      navigation.goBack();
      showSuccess(i18n.t('successUpdateProfile'));
      console.log('Put profile data berhasil');
    })
    .catch((err) => {
      dispatch(failedPutProfile());
      dispatch(setLoading(false));
      showDanger(i18n.t('failedUpdateProfile'));
      console.log(err);
    });
};
