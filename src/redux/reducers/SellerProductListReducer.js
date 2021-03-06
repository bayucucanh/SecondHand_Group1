import {
  GET_SELLER_PRODUCT_SUCCESS,
  GET_SELLER_PRODUCT_FAILED,
  GET_DETAIL_SELLER_PRODUCT_SUCCESS,
  GET_DETAIL_SELLER_PRODUCT_FAILED,
  PATCH_PRODUCT_SUCCESS,
  PATCH_PRODUCT_FAILED,
} from '../types';

const initialState = {
  sellerProductList: [],
  sellerProductDetail: [],
  sellerProductUpdateStatus: [],
};

const SellerProductListReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SELLER_PRODUCT_SUCCESS:
      return {
        ...state,
        sellerProductList: action.payload,
      };
    case GET_SELLER_PRODUCT_FAILED:
      return {
        ...state,
      };
    case GET_DETAIL_SELLER_PRODUCT_SUCCESS:
      return {
        ...state,
        sellerProductDetail: action.payload,
      };
    case GET_DETAIL_SELLER_PRODUCT_FAILED:
      return {
        ...state,
      };
    case PATCH_PRODUCT_SUCCESS:
      return {
        ...state,
        sellerProductUpdateStatus: action.payload,
      };
    case PATCH_PRODUCT_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default SellerProductListReducer;
