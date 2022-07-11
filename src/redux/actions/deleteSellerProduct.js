import i18n from 'i18next';
import { DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILED } from '../types';
import { deleteProduct } from '../../service/Api/seller';
import { setLoading } from './globalAction';
import { showDanger, showSuccess } from '../../utils';

export const successDeleteProduct = () => ({
  type: DELETE_PRODUCT_SUCCESS,
});

export const failedDeleteProduct = () => ({
  type: DELETE_PRODUCT_FAILED,
});

export const deleteDataProduct = (accessToken, id, navigation) => async (dispatch) => {
  dispatch(setLoading(true));
  await deleteProduct(accessToken, id)
    .then(() => {
      dispatch(successDeleteProduct());
      dispatch(setLoading(false));
      showSuccess(i18n.t('successDeleteProduct'));
      navigation.navigate('MainApp', { screen: 'DaftarJual' });
      console.log('Delete product data berhasil');
    })
    .catch((err) => {
      dispatch(failedDeleteProduct());
      dispatch(setLoading(false));
      showDanger(i18n.t('failedDeleteProduct'));
      console.log(err);
    });
};
