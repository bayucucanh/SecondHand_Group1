import { GET_CATEGORY_SUCCESS, GET_CATEGORY_FAILED } from '../types';
import { getCategory } from '../../service/Api/seller';
import { setLoading } from './globalAction';

export const successGetCategories = (value) => ({
  type: GET_CATEGORY_SUCCESS,
  payload: value,
});

export const failedGetCategories = () => ({
  type: GET_CATEGORY_FAILED,
});

export const getDataCategories = () => async (dispatch) => {
  dispatch(setLoading(true));
  await getCategory()
    .then((value) => {
      dispatch(successGetCategories(value.data));
      dispatch(setLoading(false));
      console.log('Get categories berhasil');
    })
    .catch((err) => {
      dispatch(failedGetCategories());
      dispatch(setLoading(false));
      console.log(err.message);
    });
};
