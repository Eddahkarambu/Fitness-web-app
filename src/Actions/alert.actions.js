import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    clear,
    
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
  return { type: alertConstants.CLEAR };
}

// export const Types = {
//     LOGIN: 'LOGIN',
//     FIRST_NAME: 'FIRST_NAME',
//     LAST_NAME: 'LAST_NAME',
//     EMAIL: 'EMAIL',
//     PASSWORD: 'PASSWORD'
//   }