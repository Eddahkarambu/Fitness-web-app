import { userConstants } from "../Constants";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

export function users(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userConstants.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case userConstants.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
