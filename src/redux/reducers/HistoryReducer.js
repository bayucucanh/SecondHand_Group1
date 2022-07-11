import { GET_HISTORY_SUCCESS, GET_HISTORY_FAILED } from '../types';

const initialState = {
  allHistory: [],
  detailHistory: [],
};

const HistoryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_HISTORY_SUCCESS:
      return {
        ...state,
        allHistory: action.payload,
      };
    case GET_HISTORY_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default HistoryReducer;
