import axios from 'axios';
import { GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILED } from '../types';
import { API_GET_CATEGORY } from '../../config/api';

export const successGetCategories = (value) => ({
  type: GET_CATEGORY_SUCCESS,
  payload: value,
});

export const failedGetCategories = () => ({
  type: GET_CATEGORY_FAILED,
});

export const getDataCategories = () => async (dispatch) => {
  await axios
    .get(API_GET_CATEGORY)
    .then((value) => {
      dispatch(successGetCategories(value.data));
      console.log('Get categories berhasil');
    })
    .catch((err) => {
      dispatch(failedGetCategories());
      console.log(err.message);
    });
};
