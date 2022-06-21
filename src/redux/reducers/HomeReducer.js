import {
  GET_PRODUCT_FAILED,
  GET_PRODUCT_SUCCESS,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
} from '../types';

const initialState = {
  dataProduct: [],
  categories: [],
};

const HomeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        dataProduct: action.payload,
      };
    case GET_CATEGORY_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default HomeReducer;
