import { DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILED } from '../types';
import { deleteProduct } from '../../service/Api/seller';
import { setLoading } from './globalAction';

export const successDeleteProduct = () => ({
  type: DELETE_PRODUCT_SUCCESS,
});

export const failedDeleteProduct = () => ({
  type: DELETE_PRODUCT_FAILED,
});

export const deleteDataProduct = (accessToken, id) => async (dispatch) => {
  dispatch(setLoading(true));
  await deleteProduct(accessToken, id)
    .then(() => {
      dispatch(successDeleteProduct());
      dispatch(setLoading(false));
      console.log('Delete product data berhasil');
    })
    .catch((err) => {
      dispatch(failedDeleteProduct());
      dispatch(setLoading(false));
      console.log(err);
    });
};
