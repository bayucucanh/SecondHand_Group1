import { GET_DETAIL_PRODUCT_SUCCESS, GET_DETAIL_PRODUCT_FAILED } from '../types';
import { detailBuyerProduct } from '../../service/Api/buyer';
import { setLoading } from './globalAction';

export const successGetDetailProduct = (value) => ({
  type: GET_DETAIL_PRODUCT_SUCCESS,
  payload: value,
});

export const failedGetDetailProduct = () => ({
  type: GET_DETAIL_PRODUCT_FAILED,
});

export const getDetailData = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  await detailBuyerProduct(id).then((value) => {
    dispatch(successGetDetailProduct(value.data));
    dispatch(setLoading(false));
    console.log('Get detail product berhasil');
  }).catch((err) => {
    dispatch(failedGetDetailProduct(err.message));
  });
};
