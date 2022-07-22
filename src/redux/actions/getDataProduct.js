import axios from 'axios';
import {
  GET_PRODUCT_FAILED, GET_PRODUCT_SUCCESS,
} from '../types';
import { getBuyerProduct } from '../../service/Api/buyer';
import { setLoading, setRefresh } from './globalAction';

export const successGetProduct = (value) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: value,
});

export const failedGetProduct = () => ({
  type: GET_PRODUCT_FAILED,
});

export const getDataProduct = (props) => async (dispatch) => {
  dispatch(setLoading(true));
  await getBuyerProduct(`?status=${props?.status}&category_id=${props?.category_id}&search=${props?.search}&page=${props?.page}&per_page=${props?.per_page}`)
    .then((value) => {
      dispatch(successGetProduct(value?.data));
      dispatch(setLoading(false));
      dispatch(setRefresh(false));
      console.log('Get data product berhasil');
    })
    .catch((err) => {
      dispatch(failedGetProduct());
      dispatch(setLoading(false));
      console.log(err.message);
    });
};
