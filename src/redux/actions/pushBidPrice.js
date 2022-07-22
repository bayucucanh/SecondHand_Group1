import i18n from 'i18next';
import {
  BID_PRODUCT_FAILED,
  BID_PRODUCT_SUCCESS,
} from '../types';
import { addBuyerOrder } from '../../service/Api/buyer';
import { setLoading } from './globalAction';
import { showDanger, showSuccess } from '../../utils';

export const successBid = (payload) => ({
  type: BID_PRODUCT_SUCCESS,
  payload,
});

export const failedBid = () => ({
  type: BID_PRODUCT_FAILED,
});

export const bidProduct = (payload, accessToken, navigation) => async (dispatch) => {
  dispatch(setLoading(true));
  await addBuyerOrder(payload, accessToken).then((response) => {
    dispatch(successBid(response.data));
    dispatch(setLoading(false));
    showSuccess(i18n.t('pushBidSuccess'));
  }).catch((err) => {
    dispatch(failedBid());
    dispatch(setLoading(false));
    showDanger(i18n.t('pushBidFailed'));
    showDanger(err.response.data.message);
  });
};
