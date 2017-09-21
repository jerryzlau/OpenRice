import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import * as RestAPI from './util/restaurant_api_util';
import restaurantReducer from './reducers/restaurant_reducer';
import * as Actions from './actions/restaurant_actions';

// test ajax
// window.createRestaurantajax = RestAPI.createRestaurant;
window.fetchRestaurant = RestAPI.fetchRestaurant;
// window.fetchAllRestaurants = RestAPI.fetchAllRestaurants;
// window.destroyRestaurantajax = RestAPI.destroyRestaurant;
// window.updateRestaurant = RestAPI.updateRestaurant;

// test reducers
// window.restaurantReducer = restaurantReducer;

//test actions
// window.receiveAllRestaurants = Actions.receiveAllRestaurants;
window.receiveRestaurant = Actions.receiveRestaurant;
window.requestRestaurant = Actions.requestRestaurant;
// window.createRestaurant = Actions.createRestaurant;
// window.destroyRestaurant = Actions.destroyRestaurant;
// window.editRestaurant = Actions.editRestaurant;

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}  />, root);
});
