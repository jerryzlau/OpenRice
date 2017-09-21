import {RECEIVE_RESTAURANT,
        RECEIVE_ALL_RESTAURANTS,
        // RECEIVE_RESTAURANT_ERRORS, TODO: omit errors for now
        // CLEAR_RESTAURANT_ERRORS,
        REMOVE_RESTAURANT,
        UPDATE_RESTAURANT
      } from '../actions/restaurant_actions';
import merge from 'redux';


const initialRestaurantState = {
  name: "",
  owner_id: "",
  start_price: "",
  end_price: "",
  capacity: "",
  address: "",
  cusine_type: "",
  phone_num: "",
  website: "",
  dining_style: "",
  description: "",
  open_time: "",
  close_time: ""
};

// TODO: revisit this to make sure the state is what was expected
const restaurantReducer = (state = initialRestaurantState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_RESTAURANT:
      newState = {[action.restaurant.id]: action.restaurant};
      return merge({}, state, newState);
    case RECEIVE_ALL_RESTAURANTS:
      // newState = {};
      // Object.keys(action.restaurants).forEach(idx => {
      //   newState[idx] = action.restaurants[idx];
      // });
      // return newState;
      return action.restaurnts;
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
