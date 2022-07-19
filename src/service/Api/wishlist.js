// eslint-disable-next-line
import axios from '../../utils/axios';

export const postWishlist = (accessToken, payload) => axios.post('buyer/wishlist', payload, {
  headers: {
    access_token: accessToken,
  },
});

export const getWishlist = (accessToken) => axios.get('buyer/wishlist', {
  headers: {
    access_token: accessToken,
  },
});

export const getDetailWishlist = (accessToken, id) => axios.get(`buyer/wishlist/${id}`, {
  headers: {
    access_token: accessToken,
  },
});

export const deleteWishlist = (accessToken, id) => axios.delete(`buyer/wishlist/${id}`, {
  headers: {
    access_token: accessToken,
  },
});
