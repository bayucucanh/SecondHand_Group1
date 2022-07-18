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
export const detailBuyerOrder = (id, accessToken) => axios.get(`/buyer/order/${id}`, {
  headers: {
    access_token: accessToken,
  },
});
export const addBuyerOrder = (payload, accessToken) => axios.post('/buyer/order/', payload, {
  headers: {
    access_token: accessToken,
  },
});

export const updateBuyerOrder = (id, payload, accessToken) => axios.put(`/buyer/order/${id}`, payload, {
  headers: {
    access_token: accessToken,
  },
});

export const deleteBuyerOrder = (id, accessToken) => axios.delete(`/buyer/order/${id}`, {
  headers: {
    access_token: accessToken,
  },
});

// buyer/product
export const getBuyerProduct = (url) => axios.get(`/buyer/product${url}`);
export const detailBuyerProduct = (id) => axios.get(`/buyer/product/${id}`);
