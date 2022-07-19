import { GET_DETAIL_WISHLIST_SUCCESS, GET_DETAIL_WISHLIST_FAILED } from '../types';
import { getDetailWishlist } from '../../service/Api/wishlist';
import { setLoading } from './globalAction';

export const successGetDetailWishlist = (value) => ({
  type: GET_DETAIL_WISHLIST_SUCCESS,
  payload: value,
});

export const failedGetDetailWishlist = () => ({
  type: GET_DETAIL_WISHLIST_FAILED,
});

export const getDetailWishlistData = (accessToken, id) => async (dispatch) => {
  dispatch(setLoading(true));
  await getDetailWishlist(accessToken, id).then((value) => {
    dispatch(successGetDetailWishlist(value.data));
    dispatch(setLoading(false));
    console.log('Get detail wishlist berhasil');
  }).catch((err) => {
    dispatch(failedGetDetailWishlist());
    console.log(err.message);
  });
};
