import {RECEIVE_CURRENT_USER,
        RECEIVE_SESSION_ERRORS,
        CLEAR_SESSION_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullErrors = [];

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type){
    case CLEAR_SESSION_ERRORS:
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
