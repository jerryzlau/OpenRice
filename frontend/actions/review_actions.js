import * as ReviewAPI from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

//actions handling
export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

//error handling
export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS
});

//create a review
export const createReview = review => dispatch => (
  ReviewAPI.createReview(review)
                .then(newReview => (dispatch(receiveReview(newReview))),
                 err => (dispatch(receiveReviewErrors(err.responseJSON))))
);

//fetch a review for review show page
export const requestReview = reviewId => dispatch => (
  ReviewAPI.fetchReview(reviewId)
                .then(review => (dispatch(receiveReview(review))),
                 err => dispatch(receiveReviewErrors(err.responseJSON)))
);

// fetch all of current restaurant's reviews
export const requestRestaurantReviews = ({userId, restaurantId}) => dispatch => (
  ReviewAPI.fetchRestaurantReviews(userId, restaurantId)
                .then(reviews => (dispatch(receiveReviews(reviews))),
                 err => (dispatch(receiveReviewErrors(err.responseJSON))))
);

// fetch all of current user's reviews
export const requestUserReviews = userId => dispatch => (
  ReviewAPI.fetchUserReviews(userId)
                .then(reviews => (dispatch(receiveReviews(reviews))),
                 err => (dispatch(receiveReviewErrors(err.responseJSON))))
);

// cancel a review
export const destroyReview = reviewId => dispatch => (
  ReviewAPI.destroyReview(reviewId)
                .then(review => (dispatch(removeReview(review))),
                 err => dispatch(receiveReviewErrors(err.responseJSON)))
);

// modify a reservaiton
export const editReview = review => dispatch => (
  ReviewAPI.updateReview(review)
                .then(newReview => (dispatch(receiveReview(newReview))),
                 err => dispatch(receiveReviewErrors(err.responseJSON)))
);
