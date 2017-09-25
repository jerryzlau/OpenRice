//create method
export const createReservation = reservation => (
  $.ajax({
    method: 'POST',
    url: `/api/reservations`,
    data: {reservation}
  })
);

//show one method
export const fetchReservation = reservationId => (
  $.ajax({
    method: 'GET',
    url: `/api/reservations/${reservationId}`
  })
);

//restaurant reservation index
export const fetchRestaurantReservations = (userId, restaurantId) => (
  $.ajax({
    method: 'GET',
    url: '/api/reservations',
    data: {userId, restaurantId}
  })
);

//user profile reservation index
export const fetchUserReservations = userId => (
  $.ajax({
    method: 'GET',
    url: '/api/reservations',
    data: {userId}
  })
);

// delete reservation
export const destroyReservation = reservationId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reservations/${reservationId}`
  })
);

//update reservation
export const updateReservation = reservation => (
  $.ajax({
    method: 'PATCH',
    url: `/api/reservations/${reservation.id}`,
    data: {reservation}
  })
);
