import { userAuthentication } from "../Constants";

const initialState = {
  loading: false,
  error: "",
  authenticated: false,
};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userAuthentication.REQUEST:
      return {
        ...state,
        loading: true,
      };

    case userAuthentication.SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
      };
    case userAuthentication.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
