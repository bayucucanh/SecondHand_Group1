import axios from '../../utils/axios';
/* eslint camelcase: ["error", {ignoreGlobals: true}] */
/* global no_camelcased */

// buyer/order
/* eslint-disable camelcase */
export const getBuyerOrder = (accessToken) => axios.get('/buyer/order', {
  headers: {
    access_token: accessToken,
  },
});
export const detailBuyerOrder = (id) => axios.get(`/buyer/order/${id}`);
export const addBuyerOrder = (payload, accessToken) => axios.post('/buyer/order/', payload, {
  headers: {
    access_token: accessToken,
  },
});
export const updateBuyerOrder = (productId, bidPrice) => axios.put('/buyer/order/', { productId, bidPrice });
export const deleteBuyerOrder = (id) => axios.delete(`/buyer/order/${id}`);

// buyer/product
export const getBuyerProduct = (url) => axios.get(`/buyer/product${url}`);
export const detailBuyerProduct = (id) => axios.get(`/buyer/product/${id}`);
