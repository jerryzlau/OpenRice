export const createRestaurant = restaurant => (
  $.ajax({
    method: 'POST',
    url: '/api/restaurants',
    data: {restaurant}
  })
);

export const fetchRestaurant = restaurantId => (
  $.ajax({
    method: 'GET',
    url: `/api/restaurants/${restaurantId}`
  })
);

export const fetchAllRestaurants = () => (
  $.ajax({
    method: 'GET',
    url: '/api/restaurants'
  })
);

export const destroyRestaurant = (restaurantId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/restaurants/${restaurantId}`
  })
);
