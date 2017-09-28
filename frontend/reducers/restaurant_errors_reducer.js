import {RECEIVE_RESTAURANT,
        RECEIVE_RESTAURANT_ERRORS,
        RECEIVE_ALL_RESTAURANTS,
        CLEAR_RESTAURANT_ERRORS} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const RestaurantErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case CLEAR_RESTAURANT_ERRORS:
    case RECEIVE_ALL_RESTAURANTS:
    case RECEIVE_RESTAURANT:
      return [];
    case RECEIVE_RESTAURANT_ERRORS:
      console.log(action);
      return action.errors;
    default:
      return state;
  }
};

export default RestaurantErrorsReducer;
