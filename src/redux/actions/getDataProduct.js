import axios from 'axios';
import {
  GET_PRODUCT_FAILED, GET_PRODUCT_SUCCESS,
} from '../types';

export const successGetProduct = (value) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: value,
});

export const failedGetProduct = () => ({
  type: GET_PRODUCT_FAILED,
});

export const getDataProduct = (url) => async (dispatch) => {
  await axios
    .get(url)
    .then((value) => {
      dispatch(successGetProduct(value.data));
      console.log('Get data product berhasil');
    })
    .catch((err) => {
      dispatch(failedGetProduct());
      console.log(err.message);
    });
};
