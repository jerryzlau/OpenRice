import {RECEIVE_RESTAURANT,
        RECEIVE_ALL_RESTAURANTS,
        // RECEIVE_RESTAURANT_ERRORS, TODO: omit errors for now
        // CLEAR_RESTAURANT_ERRORS,
        REMOVE_RESTAURANT,
        UPDATE_RESTAURANT
      } from '../actions/restaurant_actions';
import merge from 'lodash/merge';


// const initialRestaurantState = {};

// TODO: revisit this to make sure the state is what was expected
const restaurantReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_RESTAURANT:
      let restaurant = action.restaurant.restaurant;
      newState = {[restaurant.id]: restaurant};
      // debugger
      return merge({}, state, newState);
    case RECEIVE_ALL_RESTAURANTS:
      return action.restaurants;
    case REMOVE_RESTAURANT:
      newState = {};
      Object.keys(state).forEach(idx => {
        if (action.restaurant.id !== idx){
          newState[idx] = state[idx];
        }
      });
      return newState;
    // case UPDATE_RESTAURANT: //TODO: omited update for now
    //   newState = state.restaurants;
    //
    default:
      return state;

  }
};

export default restaurantReducer;
