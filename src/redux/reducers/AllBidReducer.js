import {
  GET_ALL_BID_SUCCESS,
  GET_ALL_BID_FAILED,
} from '../types';

const initialState = {
  allBidProduct: [],
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
    default:
      return state;
  }
};

export default AllBidReducer;
