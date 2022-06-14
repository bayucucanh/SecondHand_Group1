import { LOGIN_SUCCESS, LOGIN_FAILED } from "../types";

const initialState = {
  userData: [],
};

const LoginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default LoginReducer;
