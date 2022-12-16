import { userConstants } from "../Constants";

const initialState = {
  loading: false,
  error: "",
};

export function authentication(state = initialState, action) {
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
    default:
      return state;
  }
}
