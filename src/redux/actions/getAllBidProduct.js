import { GET_ALL_BID_SUCCESS, GET_ALL_BID_FAILED } from '../types';
import { getBuyerOrder } from '../../service/Api/buyer';
import { setLoading } from './globalAction';

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
