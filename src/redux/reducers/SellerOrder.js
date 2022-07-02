import { GET_SELLER_ORDER_SUCCESS, GET_SELLER_ORDER_FAILED } from '../types';

const initialState = {
  sellerOrder: [],
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
    default:
      return state;
  }
};

export default SellerOrderReducer;
