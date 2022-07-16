import {
  GET_ALL_BID_SUCCESS,
  GET_ALL_BID_FAILED,
  GET_BID_DETAIL_SUCCESS,
  GET_BID_DETAIL_FAILED,
} from '../types';

const initialState = {
  allBidProduct: [],
  detailBidProduct: {},
};

const AllBidReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_BID_SUCCESS:
      return {
        ...state,
        allBidProduct: action.payload,
      };
    case GET_ALL_BID_FAILED:
      return {
        ...state,
      };
    case GET_BID_DETAIL_SUCCESS:
      return {
        ...state,
        detailBidProduct: action.payload,
      };
    case GET_BID_DETAIL_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default AllBidReducer;
