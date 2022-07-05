import {
  GET_SELLER_ORDER_SUCCESS, GET_SELLER_ORDER_FAILED, GET_SELLER_DETAIL_ORDER_SUCCESS, GET_SELLER_DETAIL_ORDER_FAILED,
  PUT_STATUS_SELLER_ORDER_SUCCESS, PUT_STATUS_SELLER_ORDER_FAILED,
} from '../types';

const initialState = {
  sellerOrder: [],
  sellerDetailOrder: [],
  updateStatusOrder: [],
};

const SellerOrderReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SELLER_ORDER_SUCCESS:
      return {
        ...state,
        sellerOrder: action.payload,
      };
    case GET_SELLER_ORDER_FAILED:
      return {
        ...state,
      };
    case GET_SELLER_DETAIL_ORDER_SUCCESS:
      return {
        ...state,
        sellerDetailOrder: action.payload,
      };
    case GET_SELLER_DETAIL_ORDER_FAILED:
      return {
        ...state,
      };
    case PUT_STATUS_SELLER_ORDER_SUCCESS:
      return {
        ...state,
        updateStatusOrder: action.payload,
      };
    case PUT_STATUS_SELLER_ORDER_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default SellerOrderReducer;
