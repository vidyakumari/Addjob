import { userConstants } from './constants';

function users(state = {}, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loading: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.LOGIN_FAILURE:
      return {
        error: true
      };
    default:
      return {
        error: action.error
      }
  }
}

function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true };
    case userConstants.REGISTER_SUCCESS:
      return {};
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}

export {users, registration}