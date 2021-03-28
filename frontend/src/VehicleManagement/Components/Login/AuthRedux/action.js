import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "./actionTypes";
import axios from "axios";

export const loginReq = () => ({
  type: LOGIN_REQUEST,
});
export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginOperatorData = ({ email, password }) => (dispatch) => {
  dispatch(loginReq());
  // console.log(email, password);
  if (email == "admin" && password == "admin") {
    dispatch(loginSuccess());
  } else {
    axios({
      method: "POST",
      url: "http://localhost:8000/api/login",
      data: {
        email,
        password,
      },
    })
      .then((res) => dispatch(loginSuccess(res.data)))
      .catch((err) => dispatch(loginFailure(err)));
  }
};

export const logoutReq = () => ({
  type: LOGOUT_REQUEST,
});
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
export const logoutFailure = () => ({
  type: LOGOUT_FAILURE,
});

export const logoutOperatorData = () => (dispatch) => {
  dispatch(logoutReq());
  dispatch(logoutSuccess());
  dispatch(logoutFailure());
};
