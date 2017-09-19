import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  SessionAPI.signup(user)
            .then(currentUser => (dispatch(receiveCurrentUser(currentUser))),
             err => (dispatch(receiveErrors(err.responseJSON))))
);

export const login = user => dispatch => (
  SessionAPI.login(user)
            .then(currentUser => (dispatch(receiveCurrentUser(currentUser))),
             err => (dispatch(receiveErrors(err.responseJSON))))
);

export const logout = () => dispatch => (
  SessionAPI.logout()
            .then(user => (dispatch(receiveCurrentUser(null))))
);
