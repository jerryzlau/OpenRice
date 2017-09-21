import * as RestAPI from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';
export const UPDATE_RESTAURANT = 'UPDATE_RESTAURANT';
export const CLEAR_RESTAURANT_ERRORS = 'CLEAR_RESTAURANT_ERRORS';
export const RECEIVE_RESTAURANT_ERRORS = 'RECEIVE_RESTAURANT_ERRORS';


export const receiveAllRestaurants = restaurants => ({
  type: RECEIVE_ALL_RESTAURANTS,
  restaurants
});

export const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const removeRestaurant = restaurant => ({
  type: REMOVE_RESTAURANT,
  restaurant
});

export const updateRestaurant = restaurant => ({
  type: UPDATE_RESTAURANT,
  restaurant
});

export const receiveRestaurantErrors = errors => ({
  type: RECEIVE_RESTAURANT_ERRORS,
  errors
});

export const clearRestaurantErrors = () => ({
  type: CLEAR_RESTAURANT_ERRORS
});

// request all restaurants (index)
export const requestAllRestaurants = () => dispatch => (
  RestAPI.requestAllRestaurants()
            .then(restaurants => (dispatch(receiveAllRestaurants())),
             err => (dispatch(receiveRestaurantErrors(err.responseJSON))))
);

// request one restaurant (show)
export const requestRestaurant = (restaurantId) => dispatch => (
  RestAPI.fetchRestaurant()
         .then(restaurant => (dispatch(receiveRestaurant(restaurant))),
          err => (dispatch(receiveRestaurantErrors(err.responseJSON))))
);

// make a new restaurant (create)
export const createRestaurant = restaurant => dispatch => (
  RestAPI.createRestaurant()
         .then(newRestaurant => (dispatch(receiveRestaurant(newRestaurant))),
          err => (dispatch(receiveRestaurantErrors(err.responseJSON))))
);

// remove a restaurant (delete)
export const destroyRestaurant = restaurantId => dispatch => (
  RestAPI.destroyRestaurant()
         .then(restaurant => (dispatch(removeRestaurant(restaurant))),
          err => (dispatch(receiveRestaurantErrors(err.responseJSON))))
);

// edit a restaurant (update)
export const editRestaurant = restaurantId => dispatch => (
  RestAPI.updateRestaurant()
         .then(restaurant => (dispatch(updateRestaurant(restaurant))),
          err => (dispatch(receiveRestaurantErrors(err.responseJSON))))
);
