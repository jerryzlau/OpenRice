import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import * as RestAPI from './util/restaurant_api_util';


window.createRestaurant = RestAPI.createRestaurant;
window.fetchRestaurant = RestAPI.fetchRestaurant;
window.fetchAllRestaurants = RestAPI.fetchAllRestaurants;
window.destroyRestaurant = RestAPI.destroyRestaurant;
window.updateRestaurant = RestAPI.updateRestaurant;

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
