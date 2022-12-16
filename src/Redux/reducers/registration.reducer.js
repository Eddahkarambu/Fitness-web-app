import { userRegistration } from "../Constants";

const initialState = {
  loading: false,
  error: "",
};

export function registration(state = initialState, action) {
  switch (action.type) {
    case userRegistration.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userRegistration.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case userRegistration.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
