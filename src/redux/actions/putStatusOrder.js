import i18n from 'i18next';
import { PUT_STATUS_SELLER_ORDER_SUCCESS, PUT_STATUS_SELLER_ORDER_FAILED } from '../types';
import { updateSellerOrder } from '../../service/Api/seller';
import { showSuccess, showDanger } from '../../utils';
import { setLoading } from './globalAction';

export const successPutOrder = (value) => ({
  type: PUT_STATUS_SELLER_ORDER_SUCCESS,
  payload: value,
});

export const failedPutOrder = () => ({
  type: PUT_STATUS_SELLER_ORDER_FAILED,
});

export const putStatusSellerOrder = (accessToken, id, status) => async (dispatch) => {
  dispatch(setLoading(true));
  await updateSellerOrder(accessToken, id, status).then((value) => {
    dispatch(successPutOrder(value.data));
    dispatch(setLoading(false));
    showSuccess(i18n.t('successChangeSellerOrder'));
  }).catch((err) => {
    dispatch(failedPutOrder());
    showDanger(i18n.t('failedChangeSellerOrder'));
    console.log(err.message);
  });
};
