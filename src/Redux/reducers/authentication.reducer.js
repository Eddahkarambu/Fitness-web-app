import { userConstants } from "../Constants";

// let user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  loading: false,
  error: "",
};

export function authentication(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
