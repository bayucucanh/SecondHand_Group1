import {
  GET_PRODUCT_FAILED,
  GET_PRODUCT_SUCCESS,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_BANNER_SUCCESS,
  GET_BANNER_FAILED,
} from '../types';

const initialState = {
  dataProduct: [],
  categories: [],
  dataBanner: [],
};

const HomeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        dataProduct: action.payload,
      };
    case GET_PRODUCT_FAILED:
      return {
        ...state,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_CATEGORY_FAILED:
      return {
        ...state,
      };
    case GET_BANNER_SUCCESS:
      return {
        ...state,
        dataBanner: action.payload,
      };
    case GET_BANNER_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default HomeReducer;
