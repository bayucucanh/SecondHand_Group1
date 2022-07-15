import { PUT_STATUS_SELLER_ORDER_SUCCESS, PUT_STATUS_SELLER_ORDER_FAILED } from '../types';
import { updateSellerOrder } from '../../service/Api/seller';
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
    console.log('Update put seller order success');
  }).catch((err) => {
    dispatch(failedPutOrder());
    console.log(err.message);
  });
};
