import i18n from 'i18next';
import { PATCH_PRODUCT_SUCCESS, PATCH_PRODUCT_FAILED } from '../types';
import { updateStatusProduct } from '../../service/Api/seller';
import { setLoading } from './globalAction';
import { showDanger, showSuccess } from '../../utils';

export const successUpdateStatus = (value) => ({
  type: PATCH_PRODUCT_SUCCESS,
  payload: value,
});

export const failedUpdateStatus = () => ({
  type: PATCH_PRODUCT_FAILED,
});

export const patchStatusProduct = (accessToken, id, payload) => async (dispatch) => {
  dispatch(setLoading(true));
  await updateStatusProduct(accessToken, id, payload)
    .then(() => {
      dispatch(successUpdateStatus(true));
      dispatch(setLoading(false));
      showSuccess(i18n.t('updateStatusProductSuccess'));
      console.log('Update Status Product Berhasil');
    })
    .catch((err) => {
      dispatch(failedUpdateStatus());
      dispatch(setLoading(false));
      showDanger(i18n.t('updateStatusProductFailed'));
      console.log(err.message);
    });
};
