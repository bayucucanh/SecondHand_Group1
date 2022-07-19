import i18n from 'i18next';
import { POST_WISHLIST_SUCCESS, POST_WISHLIST_FAILED } from '../types';
import { postWishlist } from '../../service/Api/wishlist';
import { setLoading } from './globalAction';
import { showDanger, showSuccess } from '../../utils';
import { getWishlistData } from './getWishlist';

export const successPostWishlist = () => ({
  type: POST_WISHLIST_SUCCESS,
});

export const failedPostWishlist = () => ({
  type: POST_WISHLIST_FAILED,
});

export const postWishlistData = (accessToken, payload) => async (dispatch) => {
  dispatch(setLoading(true));
  await postWishlist(accessToken, payload)
    .then((value) => {
      dispatch(successPostWishlist());
      dispatch(setLoading(false));
      dispatch(getWishlistData());
      showSuccess(i18n.t('postWishlistSuccess'));
      console.log('Post Wishlist Berhasil');
    })
    .catch((err) => {
      dispatch(failedPostWishlist());
      dispatch(setLoading(false));
      showDanger(i18n.t('postWishlistFailed'));
      console.log(err.message);
    });
};
