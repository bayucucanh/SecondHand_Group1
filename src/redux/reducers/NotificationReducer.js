import {
  GET_NOTIFICATION_SUCCESS, GET_NOTIFICATION_FAILED,
} from '../types';

const initialState = {
  notifikasi: [],
};

const NotificationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notifikasi: action.payload,
      };
    case GET_NOTIFICATION_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default NotificationReducer;
