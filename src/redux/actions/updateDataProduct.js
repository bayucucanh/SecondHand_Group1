import i18n from 'i18next';
import { PUT_PRODUCT_SUCCESS, PUT_PRODUCT_FAILED } from '../types';
import { updateProduct } from '../../service/Api/seller';
import { setLoading } from './globalAction';
import { showSuccess, showDanger } from '../../utils';

export const successPutProduct = (value) => ({
  type: PUT_PRODUCT_SUCCESS,
  payload: value,
});

export const failedPutProduct = () => ({
  type: PUT_PRODUCT_FAILED,
});

export const putDataProduct = (accessToken, id, payload, navigation) => async (dispatch) => {
  dispatch(setLoading(true));
  await updateProduct(accessToken, id, payload)
    .then((value) => {
      dispatch(successPutProduct(value.data));
      dispatch(setLoading(false));
      showSuccess(i18n.t('successUpdateProduct'));
      navigation.navigate('MainApp', { screen: 'DaftarJual' });
      console.log('Put product data berhasil');
    })
    .catch((err) => {
      dispatch(failedPutProduct());
      dispatch(setLoading(false));
      showDanger(i18n.t('failedUpdateProduct'));
      console.log(err);
    });
};
