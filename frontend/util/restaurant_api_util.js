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

export const searchRestaurants = searchKeyword => (
  $.ajax({
    method: 'GET',
    url: '/api/restaurants',
    data: {searchKeyword}
  })
);

export const destroyRestaurant = (restaurantId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/restaurants/${restaurantId}`
  })
);

export const updateRestaurant = (restaurant) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/restaurants/${restaurant.id}`,
    data: {restaurant}
  })
);
