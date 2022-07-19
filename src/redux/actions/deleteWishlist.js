import i18n from 'i18next';
import { DELETE_WISHLIST_SUCCESS, DELETE_WISHLIST_FAILED } from '../types';
import { deleteWishlist } from '../../service/Api/wishlist';
import { setLoading } from './globalAction';
import { showDanger, showSuccess } from '../../utils';
import { getWishlistData } from './getWishlist';

export const successDeleteProduct = () => ({
  type: DELETE_WISHLIST_SUCCESS,
});

export const failedDeleteProduct = () => ({
  type: DELETE_WISHLIST_FAILED,
});

export const deleteWishlistData = (accessToken, id) => async (dispatch) => {
  dispatch(setLoading(true));
  await deleteWishlist(accessToken, id)
    .then(() => {
      dispatch(successDeleteProduct());
      dispatch(setLoading(false));
      dispatch(getWishlistData());
      showSuccess(i18n.t('successDeleteWishlist'));
      console.log('Delete wishlist data berhasil');
    })
    .catch((err) => {
      dispatch(failedDeleteProduct());
      dispatch(setLoading(false));
      showDanger(i18n.t('failedDeleteWishlist'));
      console.log(err);
    });
};
