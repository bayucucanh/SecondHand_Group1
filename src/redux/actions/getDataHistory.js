import {
  GET_HISTORY_SUCCESS,
  GET_HISTORY_FAILED,
  GET_HISTORY_DETAIL_SUCCESS,
  GET_HISTORY_DETAIL_FAILED,
} from '../types';
import { getHistory } from '../../service/Api';
import { setLoading } from './globalAction';
import { showDanger } from '../../utils';

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
    showDanger(err.response.data.message);
  });
};
