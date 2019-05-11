import { userConstants } from '../User/constants';
import { userService } from '../User/service';
//import { history } from '../../history/history';

export const userActions = {
  login,
  logout,
  register,
};

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }));
    userService.login(email, password)
      .then(
        user => {
          console.log(user)
          if (user === false) {
            dispatch(failure(user));
          }
          else {
            dispatch(success(user));
            window.location.replace('/')
          }
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}
function register(fullname, email, password, phone) {
  return dispatch => {
    dispatch(request({}));
    userService.register(fullname, email, password, phone)
      .then(
        user => {
          dispatch(success(user));
          window.location.replace('/login')
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}