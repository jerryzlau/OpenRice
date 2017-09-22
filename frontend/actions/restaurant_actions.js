import * as RestAPI from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';
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

export const receiveRestaurantErrors = errors => ({
  type: RECEIVE_RESTAURANT_ERRORS,
  errors
});

export const clearRestaurantErrors = () => ({
  type: CLEAR_RESTAURANT_ERRORS
});

// request all restaurants (index)
export const requestAllRestaurants = () => dispatch => (
  RestAPI.fetchAllRestaurants()
            .then(restaurants => (dispatch(receiveAllRestaurants(restaurants))),
             err => (dispatch(receiveRestaurantErrors(err.responseJSON))))
);

// request one restaurant (show)
export const requestRestaurant = (restaurantId) => dispatch => (
  RestAPI.fetchRestaurant(restaurantId)
         .then(restaurant => (dispatch(receiveRestaurant(restaurant))),
          err => (dispatch(receiveRestaurantErrors(err.responseJSON))))
);

// make a new restaurant (create)
export const createRestaurant = restaurant => dispatch => (
  RestAPI.createRestaurant(restaurant)
         .then(newRestaurant => (dispatch(receiveRestaurant(newRestaurant))),
          err => (dispatch(receiveRestaurantErrors(err.responseJSON))))
);

// remove a restaurant (delete)
export const destroyRestaurant = restaurantId => dispatch => (
  RestAPI.destroyRestaurant(restaurantId)
         .then(id => (dispatch(removeRestaurant(id))),
          err => (dispatch(receiveRestaurantErrors(err.responseJSON))))
);

// edit a restaurant (update)
export const editRestaurant = restaurant => dispatch => (
  RestAPI.updateRestaurant(restaurant)
         .then(newRestaurant => (dispatch(receiveRestaurant(newRestaurant))),
          err => (dispatch(receiveRestaurantErrors(err.responseJSON))))
);

// search for restaurants based on keyword
export const searchRestaurants = searchKeyword => dispatch => (
  RestAPI.searchRestaurants(searchKeyword)
         .then(searchResult => (dispatch(receiveAllRestaurants(searchResult)))),
         err => (dispatch(receiveRestaurantErrors(err.responseJSON)))
);
