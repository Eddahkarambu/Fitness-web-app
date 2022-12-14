import axios from "axios";
import { userConstants } from "../Constants";

function request() {
  return { type: userConstants.GET_REQUEST };
}

function success(users) {
  return { type: userConstants.GET_SUCCESS, users };
}

function failure(error) {
  return { type: userConstants.GET_FAILURE, error };
}

export const getUsers = () => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(`http://localhost:3001/users/`)
      .then(function (res) {
        dispatch(success(res.data));
      })
      .catch(function (err) {
        dispatch(failure(err));
      });
  };
};
