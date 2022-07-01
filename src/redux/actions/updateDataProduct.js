import { PUT_PRODUCT_SUCCESS, PUT_PRODUCT_FAILED } from '../types';
import { updateProduct } from '../../service/Api/seller';
import { setLoading } from './globalAction';

export const successPutProduct = (value) => ({
  type: PUT_PRODUCT_SUCCESS,
  payload: value,
});

export const failedPutProduct = () => ({
  type: PUT_PRODUCT_FAILED,
});

export const putDataProduct = (accessToken, id, payload) => async (dispatch) => {
  dispatch(setLoading(true));
  await updateProduct(accessToken, id, payload)
    .then((value) => {
      dispatch(successPutProduct(value.data));
      dispatch(setLoading(false));
      console.log('Put product data berhasil');
    })
    .catch((err) => {
      dispatch(failedPutProduct());
      dispatch(setLoading(false));
      console.log(err);
    });
};
