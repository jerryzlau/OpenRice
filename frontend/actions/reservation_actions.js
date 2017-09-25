import * as ReservationAPI from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESTAURANTS';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const RECEIVE_RESERVATION_ERRORS = 'RECEIVE_RESERVATION_ERRORS';
export const CLEAR_RESERVATION_ERRORS = 'CLEAR_RESERVATION_ERRORS';

// actions handling
export const receiveReservations = reservations => ({
  type: RECEIVE_RESERVATIONS,
  reservations
});

export const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});

export const removeReservation = reservation => ({
  type: REMOVE_RESERVATION,
  reservation
});

// error handling
export const receiveReservationErrors = errors => ({
  type: RECEIVE_RESERVATION_ERRORS,
  errors
});

export const clearReservationErrors = () => ({
  type: CLEAR_RESERVATION_ERRORS,
});

//create a reservation
export const createReservation = reservation => dispatch => (
  ReservationAPI.createReservation(reservation)
                .then(newReservation => (dispatch(receiveReservation(newReservation))),
                 err => (dispatch(receiveReservationErrors(err.responseJSON))))
);

//fetch a reservation for reservation show page
export const requestReservation = reservationId => dispatch => (
  ReservationAPI.fetchReservation(reservationId)
                .then(reservation => (dispatch(receiveReservation(reservation))),
                 err => dispatch(receiveReservationErrors(err.responseJSON)))
);

// fetch all of current restaurant's reservations
export const requestRestaurantReservations = ({userId, restaurantId}) => dispatch => (
  ReservationAPI.fetchRestaurantReservations(userId, restaurantId)
                .then(reservations => (dispatch(receiveReservations(reservations))),
                 err => (dispatch(receiveReservationErrors(err.responseJSON))))
);

// cancel a reservation
export const destroyReservation = reservationId => dispatch => (
  ReservationAPI.destroyReservation(reservationId)
                .then(reservation => (dispatch(removeReservation(reservation))),
                 err => dispatch(receiveReservationErrors(err.responseJSON)))
);

// modify a reservaiton
export const editReservation = reservation => dispatch => (
  ReservationAPI.updateReservation(reservation)
                .then(newReservation => (dispatch(receiveReservation(newReservation))),
                 err => dispatch(receiveReservationErrors(err.responseJSON)))
);
