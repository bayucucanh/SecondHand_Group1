import { GET_SELLER_PRODUCT_SUCCESS, GET_SELLER_PRODUCT_FAILED } from '../types';
import { getProduct } from '../../service/Api/seller';
import { setLoading } from './globalAction';

export const successGetSellerProduct = (value) => ({
  type: GET_SELLER_PRODUCT_SUCCESS,
  payload: value,
});

export const failedGetSellerProduct = () => ({
  type: GET_SELLER_PRODUCT_FAILED,
});

export const getDataSellerProduct = (accessToken) => async (dispatch) => {
  dispatch(setLoading(true));
  await getProduct(accessToken)
    .then((value) => {
      dispatch(successGetSellerProduct(value.data));
      dispatch(setLoading(false));
      console.log('Get seller product9 berhasil');
    })
    .catch((err) => {
      dispatch(failedGetSellerProduct());
      dispatch(setLoading(false));
      console.log(err.message);
    });
};
