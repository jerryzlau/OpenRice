import {RECEIVE_RESERVATION,
        RECEIVE_RESERVATIONS,
        REMOVE_RESERVATION} from '../actions/reservation_actions';
import merge from 'lodash/merge';

const reservationReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_RESERVATION:
      let reservation = action.reservation.reservation;
      newState = {[reservation.id]: reservation};
      return merge({}, state, newState);
    case RECEIVE_RESERVATIONS:
      return action.reservations;
    case REMOVE_RESERVATION:
      newState = merge({}, state);
      delete newState[action.reservation];
      return newState;
    default:
     return state;
  }
};

export default reservationReducer;
