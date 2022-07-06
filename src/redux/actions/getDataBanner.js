import { GET_BANNER_SUCCESS, GET_BANNER_FAILED } from '../types';
import { getBanner } from '../../service/Api/seller';
import { setLoading } from './globalAction';

export const successGetBanner = (value) => ({
  type: GET_BANNER_SUCCESS,
  payload: value,
});

export const failedGetBanner = () => ({
  type: GET_BANNER_FAILED,
});

export const getDataBanner = (payload) => async (dispatch) => {
  dispatch(setLoading(true));
  await getBanner(payload)
    .then((value) => {
      dispatch(successGetBanner(value.data));
      dispatch(setLoading(false));
      console.log('Get Banner data berhasil');
    })
    .catch((err) => {
      dispatch(failedGetBanner());
      dispatch(setLoading(false));
      console.log(err.message);
    });
};
