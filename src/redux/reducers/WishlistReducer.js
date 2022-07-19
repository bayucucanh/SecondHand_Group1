import {
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_FAILED,
  POST_WISHLIST_FAILED,
  POST_WISHLIST_SUCCESS,
  DELETE_WISHLIST_FAILED,
  DELETE_WISHLIST_SUCCESS,
  GET_DETAIL_WISHLIST_FAILED,
  GET_DETAIL_WISHLIST_SUCCESS,
} from '../types';

const initialState = {
  wishlistData: [],
};

const WishlistReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_WISHLIST_SUCCESS:
      return {
        ...state,
        wishlistData: action.payload,
      };
    case GET_WISHLIST_FAILED:
      return {
        ...state,
      };
    case GET_DETAIL_WISHLIST_SUCCESS:
      return {
        ...state,
        wishlistData: action.payload,
      };
    case GET_DETAIL_WISHLIST_FAILED:
      return {
        ...state,
      };
    case POST_WISHLIST_SUCCESS:
      return {
        ...state,
      };
    case POST_WISHLIST_FAILED:
      return {
        ...state,
      };
    case DELETE_WISHLIST_SUCCESS:
      return {
        ...state,
      };
    case DELETE_WISHLIST_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default WishlistReducer;
