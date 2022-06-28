/* eslint default-param-last: ["error"] */
import { LOADING, REFRESH } from '../types';

const initialGlobalState = {
  isLoading: false,
  isRefresh: false,
};

const GlobalReducer = (state = initialGlobalState, action = {}) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case REFRESH:
      return {
        ...state,
        isRefresh: action.payload,
      };
    default:
      return state;
  }
};

export default GlobalReducer;
