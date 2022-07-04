import {
  POST_PRODUCT_SUCCESS, POST_PRODUCT_FAILED, PUT_PRODUCT_SUCCESS, PUT_PRODUCT_FAILED,
  DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILED,
} from '../types';

const initialState = {
  productData: [],
};

const SellReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case POST_PRODUCT_SUCCESS:
      return {
        ...state,
        productData: action.payload,
      };
    case POST_PRODUCT_FAILED:
      return {
        ...state,
      };
    case PUT_PRODUCT_SUCCESS:
      return {
        ...state,
        productData: action.payload,
      };
    case PUT_PRODUCT_FAILED:
      return {
        ...state,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case DELETE_PRODUCT_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default SellReducer;
