import {
  GET_NOTIFICATION_SUCCESS, GET_NOTIFICATION_FAILED,
} from '../types';
import { getNotif } from '../../service/Api/notification';
import { setLoading } from './globalAction';

export const successGetNotification = (value) => ({
  type: GET_NOTIFICATION_SUCCESS,
  payload: value,
});

export const failedGetNotification = () => ({
  type: GET_NOTIFICATION_FAILED,
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