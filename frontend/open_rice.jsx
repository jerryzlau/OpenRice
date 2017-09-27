import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
// import * as Actions from './actions/restaurant_actions';
import * as reservationAPI from './util/reservation_api_util';
import * as resActions from './actions/reservation_actions';


// test ajax

// test reducers
// window.restaurantReducer = restaurantReducer;

//test actions
// restaurant actions test these after MVP
// window.removeRestaurant = Actions.removeRestaurant;
// window.editRestaurant = Actions.editRestaurant;
// reservation actions
// window.createReservation = resActions.createReservation;
// window.requestReservation = resActions.requestReservation;
// window.requestUserReservations = resActions.requestUserReservations;
// window.destroyReservation = resActions.destroyReservation;
// window.editReservation = resActions.editReservation;

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
