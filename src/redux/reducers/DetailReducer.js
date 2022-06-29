import {
  GET_DETAIL_PRODUCT_SUCCESS,
  GET_DETAIL_PRODUCT_FAILED,
} from '../types';

const initialState = {
  detailProduct: [],
};

const DetailReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_DETAIL_PRODUCT_SUCCESS:
      return {
        ...state,
        detailProduct: action.payload,
      };
    case GET_DETAIL_PRODUCT_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default DetailReducer;
