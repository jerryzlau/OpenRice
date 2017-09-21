import * as RestAPI from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const RECEIVE_RESTAURANT_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_RESTAURANT_ERRORS = 'CLEAR_RESTAURANT_ERRORS';

export const requestAllRestaurants = restaurants => ({
  type: RECEIVE_ALL_RESTAURANTS,
  restaurants
});

export const requestrestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});
