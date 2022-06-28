import axios from '../../utils/axios';
/* eslint camelcase: ["error", {ignoreGlobals: true}] */
/* global no_camelcased */

// buyer/order
export const getBuyerOrder = () => axios.get('/buyer/order');
export const detailBuyerOrder = (id) => axios.get(`/buyer/order/${id}`);
export const addBuyerOrder = (productId, bidPrice) => axios.post('/buyer/order/', { productId, bidPrice });
export const updateBuyerOrder = (productId, bidPrice) => axios.put('/buyer/order/', { productId, bidPrice });
export const deleteBuyerOrder = (id) => axios.delete(`/buyer/order/${id}`);

// buyer/product
export const getBuyerProduct = (url) => axios.get(`/buyer/product${url}`);
export const detailBuyerProduct = (id) => axios.get(`/buyer/product/${id}`);
