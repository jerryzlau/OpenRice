export const createFavorite = ({restaurant_id, customer_id}) => (
  $.ajax({
    method: 'POST',
    url: '/api/favorites',
    data: {restaurant_id, customer_id}
  })
);

export const destroyFavorite = ({restaurant_id, customer_id}) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/favorites/${1}`,
    data: {restaurant_id, customer_id}
  })
);

export const fetchFavorite = ({restaurant_id, customer_id}) => (
  $.ajax({
    method: 'GET',
    url: `/api/favorites`,
    data: {restaurant_id, customer_id}
  })
);
