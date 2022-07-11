import i18n from 'i18next';
import { POST_PRODUCT_SUCCESS, POST_PRODUCT_FAILED } from '../types';
import { addProduct } from '../../service/Api/seller';
import { setLoading } from './globalAction';
import { showDanger, showSuccess } from '../../utils';

export const successAddProduct = (value) => ({
  type: POST_PRODUCT_SUCCESS,
  payload: value,
});

export const failedAddProduct = () => ({
  type: POST_PRODUCT_FAILED,
});

export const addDataProduct = (accessToken, payload, navigation) => async (dispatch) => {
  dispatch(setLoading(true));
  await addProduct(accessToken, payload)
    .then((value) => {
      dispatch(successAddProduct(value.data));
      dispatch(setLoading(false));
      showSuccess(i18n.t('successAddProduct'));
      navigation.navigate('MainApp', { screen: 'DaftarJual' });
      console.log('Add product data berhasil');
    })
    .catch((err) => {
      dispatch(failedAddProduct());
      dispatch(setLoading(false));
      showDanger(i18n.t('failedAddProduct'));
      console.log(err);
    });
};
