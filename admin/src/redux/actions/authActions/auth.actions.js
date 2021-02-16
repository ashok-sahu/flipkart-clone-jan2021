import axios from "../../../utils/axios";
import { authApis } from "../../../utils/ApiEndPoints";
import * as AuthConstants from "../../constants/authConstants/auth.constants";

export const login = (user) => {
  console.log(user);
  return async (dispatch, getState) => {
    dispatch({ type: AuthConstants.LOGIN_REQUEST });
    const res = await axios.post(authApis.adminSignIn, { ...user });
    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: AuthConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: AuthConstants.LOGIN_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: AuthConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: AuthConstants.LOGIN_FAILURE,
        payload: { error: "Failed to login" },
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: AuthConstants.LOGOUT_REQUEST });
    const res = await axios.post(authApis.admnLogout);

    if (res.status === 200) {
      localStorage.clear();
      dispatch({ type: AuthConstants.LOGOUT_SUCCESS });
    } else {
      dispatch({
        type: AuthConstants.LOGOUT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
