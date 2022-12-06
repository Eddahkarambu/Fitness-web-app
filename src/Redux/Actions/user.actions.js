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

export const getUsers = (userDetails) => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(`http://localhost:3001/users/usersId`, { ...userDetails })
      .then(function (res) {
        dispatch(success(res));
      })
      .catch(function (err) {
        dispatch(failure(err));
      });
  };
};
