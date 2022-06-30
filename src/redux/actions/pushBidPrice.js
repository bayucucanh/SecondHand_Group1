import {
  BID_PRODUCT_FAILED,
  BID_PRODUCT_SUCCESS,
} from '../types';
import { addBuyerOrder } from '../../service/Api/buyer';
import { setLoading } from './globalAction';

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
    console.log('Bid Success');
    navigation.navigate('Notification');
  }).catch((err) => {
    dispatch(failedBid());
    dispatch(setLoading(false));
    console.log(err.message);
  });
};
