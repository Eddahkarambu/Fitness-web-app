import axios from "axios";
import { userAuthentication } from "../Constants";

function request() {
  return { type: userAuthentication.REQUEST };
}

function success() {
  return { type: userAuthentication.SUCCESS };
}

function failure(error) {
  return { type: userAuthentication.FAILURE, error };
}

export const authenticateUser = (userDetails) => {
  return (dispatch) => {
    dispatch(request());
    axios
      .post(`http://localhost:3001/users/login`, { ...userDetails })
      .then(function (res) {
        localStorage.setItem("token", res.data.token);
        dispatch(success());
      })
      .catch(function (err) {
        dispatch(failure(err));
      });
  };
};
