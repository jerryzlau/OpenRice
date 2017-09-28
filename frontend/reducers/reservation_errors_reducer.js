import {RECEIVE_RESERVATION,
        RECEIVE_RESERVATION_ERRORS,
        CLEAR_RESERVATION_ERRORS,
        RECEIVE_RESERVATIONS} from '../actions/reservation_actions';
import merge from 'lodash/merge';

const ReservationErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_RESERVATIONS:
    case CLEAR_RESERVATION_ERRORS:
    case RECEIVE_RESERVATION:
      return [];
    case RECEIVE_RESERVATION_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default ReservationErrorsReducer;
