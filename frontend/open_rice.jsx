import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import restaurantReducer from './reducers/restaurant_reducer';
// import * as Actions from './actions/restaurant_actions';
import * as reservationAPI from './util/reservation_api_util';


// test ajax


//reservation ajax test


// test reducers
// window.restaurantReducer = restaurantReducer;

//test actions
// restaurant actions test these after MVP
// window.removeRestaurant = Actions.removeRestaurant;
// window.editRestaurant = Actions.editRestaurant;
// reservation actions


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
