import { PUT_STATUS_SELLER_ORDER_SUCCESS, PUT_STATUS_SELLER_ORDER_FAILED } from '../types';
import { updateSellerOrder } from '../../service/Api/seller';

export const successPutOrder = (value) => ({
  type: PUT_STATUS_SELLER_ORDER_SUCCESS,
  payload: value,
});

export const failedPutOrder = () => ({
  type: PUT_STATUS_SELLER_ORDER_FAILED,
});

export const putStatusSellerOrder = (accessToken, id, status) => async (dispatch) => {
  console.log('status', status);
  await updateSellerOrder(accessToken, id, status).then((value) => {
    dispatch(successPutOrder(value.data));
    console.log('Update put seller order success');
  }).catch((err) => {
    dispatch(failedPutOrder());
    console.log(err.message);
  });
};
