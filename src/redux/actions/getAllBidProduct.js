import {
  GET_ALL_BID_SUCCESS, GET_ALL_BID_FAILED, GET_BID_DETAIL_SUCCESS, GET_BID_DETAIL_FAILED, DELETE_BID_SUCCESS, DELETE_BID_FAILED, UPDATE_BID_SUCCESS, UPDATE_BID_FAILED,
} from '../types';
import {
  deleteBuyerOrder, detailBuyerOrder, getBuyerOrder, updateBuyerOrder,
} from '../../service/Api/buyer';
import { setLoading, setRefresh } from './globalAction';
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
    dispatch(setRefresh(false));
    console.log('Get Bid Detail Product Succes');
  }).catch((err) => {
    dispatch(failedGetBidDetailProduct());
    dispatch(setLoading(false));
    showDanger(err.message);
  });
};

export const successDeleteBidProduct = () => ({
  type: DELETE_BID_SUCCESS,
});

export const failedDeleteBidProduct = () => ({
  type: DELETE_BID_FAILED,
});

export const deleteBid = (id, accessToken, navigation) => async (dispatch) => {
  await deleteBuyerOrder(id, accessToken).then(() => {
    dispatch(successDeleteBidProduct());
    navigation.navigate('BuyerOrder');
    showSuccess('Batalkan tawaran berhasil!');
  }).catch(() => {
    dispatch(failedDeleteBidProduct());
    showDanger('Batalkan tawaran gagal!');
  });
};

export const successUpdateBidProduct = () => ({
  type: UPDATE_BID_SUCCESS,
});

export const failedUpdateBidProduct = () => ({
  type: UPDATE_BID_FAILED,
});

export const updateBid = (orderId, payload, accessToken) => async (dispatch) => {
  await updateBuyerOrder(orderId, payload, accessToken).then(() => {
    dispatch(successUpdateBidProduct());
    showSuccess('Tawaranmu berhasil diubah!');
  }).catch((err) => {
    dispatch(failedUpdateBidProduct());
    showDanger(err.message);
  });
};
