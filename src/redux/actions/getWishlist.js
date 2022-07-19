import { GET_WISHLIST_SUCCESS, GET_WISHLIST_FAILED } from '../types';
import { getWishlist } from '../../service/Api/wishlist';
import { setLoading } from './globalAction';

export const successGetWishlist = (value) => ({
  type: GET_WISHLIST_SUCCESS,
  payload: value,
});

export const failedGetWishlist = () => ({
  type: GET_WISHLIST_FAILED,
});

export const getWishlistData = (accessToken) => async (dispatch) => {
  dispatch(setLoading(true));
  await getWishlist(accessToken).then((value) => {
    dispatch(successGetWishlist(value.data));
    dispatch(setLoading(false));
    console.log('Get wishlist berhasil');
  }).catch((err) => {
    dispatch(failedGetWishlist());
    console.log(err.message);
  });
};
