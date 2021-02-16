import * as UserConstants from "../../constants/userConstants/userConstants";
import axios from "../../../utils/axios";
import { authApis } from "../../../utils/ApiEndPoints";

export const signup = (user) => {
  console.log(user);

  return async (dispatch) => {
    dispatch({ type: UserConstants.USER_REGISTER_REQUEST });
    const res = await axios.post(authApis.adminSignUp, {
      ...user,
    });

    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: UserConstants.USER_REGISTER_SUCCESS,
        payload: { message },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: UserConstants.USER_REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};
