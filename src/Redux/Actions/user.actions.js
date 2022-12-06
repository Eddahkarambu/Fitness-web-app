import axios from "axios";
import { userActions } from "../Constants";

function request() {
  return { type: userActions.REQUEST };
}

function success(message) {
  return { type: userActions.SUCCESS, message };
}

function failure(message) {
  return { type: userActions.FAILURE, message };
}

export const authenticateUser = (userDetails) => {
  return (dispatch) => {
    dispatch(request());
    axios
      .post(`http://localhost:3001/users/login`, { ...userDetails })
      .then(function (res) {
        dispatch(success(res));
      })
      .catch(function (err) {
        dispatch(failure(err));
      });
  };
};
