import {
  GET_HISTORY_SUCCESS,
  GET_HISTORY_FAILED,
  GET_HISTORY_DETAIL_SUCCESS,
  GET_HISTORY_DETAIL_FAILED,
} from '../types';
import { getHistory, detailHistory } from '../../service/Api';
import { setLoading } from './globalAction';
import { showDanger } from '../../utils';

// Semua Data
export const successGetHistory = (value) => ({
  type: GET_HISTORY_SUCCESS,
  payload: value,
});

export const failedGetHistory = () => ({
  type: GET_HISTORY_FAILED,
});

export const getDataHistory = (accessToken) => async (dispatch) => {
  dispatch(setLoading(true));
  await getHistory(accessToken).then((value) => {
    dispatch(successGetHistory(value.data));
    dispatch(setLoading(false));
    console.log('Get History data berhasil');
  }).catch((err) => {
    dispatch(failedGetHistory());
    setLoading(false);
    showDanger(err.message);
  });
};

// Detail Data
export const successGetDetailHistory = (value) => ({
  type: GET_HISTORY_DETAIL_SUCCESS,
  payload: value,
});

export const failedGetDetailHistory = () => ({
  type: GET_HISTORY_DETAIL_FAILED,
});

export const getDataDetailHistory = (accessToken, id) => async (dispatch) => {
  dispatch(setLoading(true));
  await detailHistory(accessToken, id).then((value) => {
    dispatch(successGetDetailHistory(value.data));
    dispatch(setLoading(false));
    console.log('Get History Detail berhasil');
  }).catch((err) => {
    dispatch(failedGetDetailHistory());
    setLoading(false);
    showDanger(err.message);
  });
};
