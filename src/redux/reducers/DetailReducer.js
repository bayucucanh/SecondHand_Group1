import {
  GET_DETAIL_PRODUCT_SUCCESS,
  GET_DETAIL_PRODUCT_FAILED,
  BID_PRODUCT_FAILED,
  BID_PRODUCT_SUCCESS,
} from '../types';

const initialState = {
  detailProduct: [],
  bidPrice: 0,
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
    case BID_PRODUCT_SUCCESS:
      return {
        ...state,
        bidPrice: action.payload,
        isBid: true,
      };
    case BID_PRODUCT_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default DetailReducer;
