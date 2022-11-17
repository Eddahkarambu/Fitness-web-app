import { userRegistration } from '../Constants';

export function registration(state = {}, action) {
  switch (action.type) {
    case userRegistration.REQUEST:
      return { registering: true };
    case userRegistration.SUCCESS:
      return {registering: 'success'};
    case userRegistration.FAILURE:
      return {registering :'failure'};
    default:
      return state
  }
}