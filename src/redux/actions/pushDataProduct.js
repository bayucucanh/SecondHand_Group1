import { POST_PRODUCT_SUCCESS, POST_PRODUCT_FAILED } from '../types';
import { addProduct } from '../../service/Api/seller';
import { setLoading } from './globalAction';

export const successAddProduct = (value) => ({
  type: POST_PRODUCT_SUCCESS,
  payload: value,
});

export const failedAddProduct = () => ({
  type: POST_PRODUCT_FAILED,
});

export const addDataProduct = (accessToken, payload) => async (dispatch) => {
  dispatch(setLoading(true));
  await addProduct(accessToken, payload)
    .then((value) => {
      dispatch(successAddProduct(value.data));
      dispatch(setLoading(false));
      console.log('Add product data berhasil');
    })
    .catch((err) => {
      dispatch(failedAddProduct());
      dispatch(setLoading(false));
      console.log(err);
    });
};
