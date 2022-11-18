import axios from 'axios';
import { userAuthentication} from '../Constants';

function request() {
    return { type: userAuthentication.REQUEST };
}

function success(message) {
    return { type: userAuthentication.SUCCESS, message };
}

function failure(message) {
  return { type: userAuthentication.FAILURE, message};
}

export const register =  (userDetails) => {
    return  (dispatch) => {  
        dispatch(request())
        axios.post(`http://localhost:3001/users/login`, {...userDetails}).then(
        function (res) {
            dispatch(success(res))
        }
        ).catch(
        function (err) {   
            dispatch(failure(err))
            
        } 
        )  
    }
};