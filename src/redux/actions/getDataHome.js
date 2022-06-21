import axios from 'axios';
import {
  GET_PRODUCT_FAILED, GET_PRODUCT_SUCCESS, GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILED,
} from '../types';
import { API_GET_PRODUCT } from '../../config/api';

export const successGetProduct = (value) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: value,
});

export const failedGetProduct = () => ({
  type: GET_PRODUCT_FAILED,
});

export const getDataProduct = () => async (dispatch) => {
  await axios
    .get(API_GET_PRODUCT)
    .then((value) => {
      dispatch(successGetProduct(value.data));
      console.log('Get data product berhasil');
    })
    .catch((err) => {
      dispatch(failedGetProduct());
      console.log(err.message);
    });
};
