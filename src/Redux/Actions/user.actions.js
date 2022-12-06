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
