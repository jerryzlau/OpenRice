import {RECEIVE_CURRENT_USER,
        RECEIVE_SESSION_ERRORS} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullErrors = Object.freeze({
  session: []
});

const SessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
