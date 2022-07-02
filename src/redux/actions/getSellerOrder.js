import { GET_SELLER_ORDER_SUCCESS, GET_SELLER_ORDER_FAILED } from '../types';
import { getSellerOrder } from '../../service/Api/seller';
import { setLoading } from './globalAction';

export const successGetSellerOrder = (value) => ({
  type: GET_SELLER_ORDER_SUCCESS,
  payload: value,
});

export const failedGetSellerOrder = () => ({
  type: GET_SELLER_ORDER_FAILED,
});

export const getDataSellerOrder = (accessToken) => async (dispatch) => {
  dispatch(setLoading(true));
  await getSellerOrder(accessToken).then((response) => {
    dispatch(successGetSellerOrder(response.data));
    dispatch(setLoading(false));
    console.log('Get Seller Order Berhasil');
  }).catch((err) => {
    dispatch(failedGetSellerOrder());
    dispatch(setLoading(false));
    console.log(err.message);
  });
};
