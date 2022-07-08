import {
  GET_NOTIFICATION_SUCCESS, GET_NOTIFICATION_FAILED, PATCH_NOTIFICATION_SUCCESS, PATCH_NOTIFICATION_FAILED,
} from '../types';
import { getNotif, patchNotif } from '../../service/Api/notification';
import { setLoading } from './globalAction';

export const successGetNotification = (value) => ({
  type: GET_NOTIFICATION_SUCCESS,
  payload: value,
});

export const failedGetNotification = () => ({
  type: GET_NOTIFICATION_FAILED,
});

export const successPatchNotification = (values) => ({
  type: PATCH_NOTIFICATION_SUCCESS,
  payload: values,
});

export const failedPatchNotification = () => ({
  type: PATCH_NOTIFICATION_FAILED,
});

export const getDataNotification = (accessToken) => async (dispatch) => {
  dispatch(setLoading(true));
  await getNotif(accessToken).then((response) => {
    dispatch(successGetNotification(response.data));
    dispatch(setLoading(false));
    console.log('Get Notifikasi Berhasil');
  }).catch((err) => {
    dispatch(failedGetNotification());
    dispatch(setLoading(false));
    console.log(err.message);
  });
};

export const patchNotifikasi = (accessToken, id) => async (dispatch) => {
  dispatch(setLoading(true));
  await patchNotif(accessToken, id).then((response) => {
    dispatch(successPatchNotification(response.data));
    dispatch(setLoading(false));
    console.log('Patch Notifikasi Berhasil');
  }).catch((err) => {
    dispatch(failedPatchNotification());
    dispatch(setLoading(false));
    console.log(err.message);
  });
};
