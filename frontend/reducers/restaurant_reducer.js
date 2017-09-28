import {RECEIVE_RESTAURANT,
        RECEIVE_ALL_RESTAURANTS,
        // RECEIVE_RESTAURANT_ERRORS, 
        // CLEAR_RESTAURANT_ERRORS,
        REMOVE_RESTAURANT
      } from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const restaurantReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_RESTAURANT:
      let restaurant = action.restaurant.restaurant;
      newState = {[restaurant.id]: restaurant};
      return merge({}, state, newState);
    case RECEIVE_ALL_RESTAURANTS:
      return action.restaurants;
    case REMOVE_RESTAURANT:
      newState = merge({}, state);
      delete newState[action.restaurant];
      return newState;
    default:
      return state;
  }
};

export default restaurantReducer;
