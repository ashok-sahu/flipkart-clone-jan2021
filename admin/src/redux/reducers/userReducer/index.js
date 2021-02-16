import * as UserContants from "../../constants/userConstants/userConstants";

const initState = {
  error: null,
  message: "",
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case UserContants.USER_REGISTER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case UserContants.USER_REGISTER_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case UserContants.USER_REGISTER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }

  return state;
};
