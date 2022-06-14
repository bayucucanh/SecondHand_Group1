import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILED } from "../types";
import { API_LOGIN } from "../../config/api/LoginApi";

export const successLogin = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const failedLogin = () => ({
  type: LOGIN_FAILED,
});


export const checkLogin = (payload) => async (dispatch) => {
  await axios
    .post(API_LOGIN, payload)
    .then((response) => {
      dispatch(successLogin(response.data));
    })
    .catch((err) => {
      dispatch(failedLogin());
    });
};
