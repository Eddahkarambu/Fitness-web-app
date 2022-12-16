import axios from "axios";
import { userRegistration } from "../Constants";

function request() {
  return { type: userRegistration.REQUEST };
}

function success() {
  return { type: userRegistration.SUCCESS };
}

function failure(error) {
  return { type: userRegistration.FAILURE, error };
}

export const register = (userDetails) => {
  return (dispatch) => {
    dispatch(request());
    axios
      .post(`http://localhost:3001/users`, { ...userDetails })
      .then(function (res) {
        localStorage.setItem("token", res.data.token);
        dispatch(success());
      })
      .catch(function (err) {
        dispatch(failure(err));
      });
  };
};
