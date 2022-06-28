import { REGISTER_SUCCESS, REGISTER_FAILED } from '../types';

const initialState = {
  registerSuccess: false,
};

const RegisterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: action.payload,
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
