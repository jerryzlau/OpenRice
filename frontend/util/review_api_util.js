//create review
export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: {review}
  })
);

//show review
export const fetchReview = reviewId => (
  $.ajax({
    method: 'GET',
    url: `/api/reviews/${reviewId}`
  })
);

//get user profile reviews
export const fetchUserReviews = (userId, restaurantId) => (
  $.ajax({
    method: 'GET',
    url: '/api/reviews',
    data: {userId, restaurantId}
  })
);

//get restaurant reviews
export const fetchRestaurantReviews = (userId, restaurantId) => (
  $.ajax({
    method: 'GET',
    url: '/api/reviews',
    data: {userId, restaurantId}
  })
);

//delete a review
export const destroyReview = reviewId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${reviewId}`
  })
);

//update a review 
export const updateReview = review => (
  $.ajax({
    method: 'PATCH',
    url: `/api/reviews/${review.id}`,
    data: {review}
  })
);
