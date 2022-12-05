import axios from "axios";
import { userRegistration } from "../Constants";

function request() {
  return { type: userRegistration.REQUEST };
}

function success(message) {
  return { type: userRegistration.SUCCESS, message };
}

function failure(message) {
  return { type: userRegistration.FAILURE, message };
}

export const register = (userDetails) => {
  return (dispatch) => {
    dispatch(request());
    axios
      .post(`http://localhost:3001/users`, { ...userDetails })
      .then(function (res) {
        dispatch(success(res));
      })
      .catch(function (err) {
        dispatch(failure(err));
      });
  };
};
