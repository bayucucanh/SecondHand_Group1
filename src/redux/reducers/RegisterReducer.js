import { REGISTER_SUCCESS, REGISTER_FAILED } from '../types';

const initialState = {
  userData: true,
};

const RegisterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      };
    case REGISTER_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default RegisterReducer;
