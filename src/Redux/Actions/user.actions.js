import axios from "axios";
import { userConstants } from "../Constants";

function request() {
  return { type: userConstants.GET_REQUEST };
}

function success(message) {
  return { type: userConstants.GET_SUCCESS, message };
}

function failure(message) {
  return { type: userConstants.GET_FAILURE, message };
}

export const getUsers = () => {
  return (dispatch) => {
    dispatch(request());
    axios
      .get(`http://localhost:3001/users/`)
      .then(function (res) {
        dispatch(success(res));
      })
      .catch(function (err) {
        dispatch(failure(err));
      });
  };
};
// const getPosts = () => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         console.log(response)
//       })
//       .catch((error) => {
//         console.error(error)
//       });
//   };
//   getPosts();
