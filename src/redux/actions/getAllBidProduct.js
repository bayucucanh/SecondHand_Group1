import {
  GET_ALL_BID_SUCCESS, GET_ALL_BID_FAILED, GET_BID_DETAIL_SUCCESS, GET_BID_DETAIL_FAILED,
} from '../types';
import { detailBuyerOrder, getBuyerOrder } from '../../service/Api/buyer';
import { setLoading } from './globalAction';
import { showDanger, showSuccess } from '../../utils';

export const successGetBidProduct = (value) => ({
  type: GET_ALL_BID_SUCCESS,
  payload: value,
});

export const failedGetBidProduct = () => ({
  type: GET_ALL_BID_FAILED,
});

export const getAllBidProduct = (accessToken) => async (dispatch) => {
  dispatch(setLoading(true));
  await getBuyerOrder(accessToken).then((values) => {
    dispatch(successGetBidProduct(values.data));
    dispatch(setLoading(false));
    console.log('Get Bid Product Succes');
  }).catch((err) => {
    dispatch(failedGetBidProduct());
    dispatch(setLoading(false));
    console.log(err.message);
  });
};

export const successGetBidDetailProduct = (value) => ({
  type: GET_BID_DETAIL_SUCCESS,
  payload: value,
});

export const failedGetBidDetailProduct = () => ({
  type: GET_BID_DETAIL_FAILED,
});

export const getBidDetailProduct = (id, accessToken) => async (dispatch) => {
  dispatch(setLoading(true));
  await detailBuyerOrder(id, accessToken).then((values) => {
    dispatch(successGetBidDetailProduct(values.data));
    dispatch(setLoading(false));
    console.log('Get Bid Detail Product Succes');
  }).catch((err) => {
    dispatch(failedGetBidDetailProduct());
    dispatch(setLoading(false));
    showDanger(err.message);
  });
};
