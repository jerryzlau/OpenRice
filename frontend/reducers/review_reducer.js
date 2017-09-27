import {RECEIVE_REVIEW,
        RECEIVE_REVIEWS,
        // RECEIVE_REVIEW_ERRORS, TODO: omit errors for now
        // CLEAR_REVIEW_ERRORS,
        REMOVE_REVIEW
      } from '../actions/review_actions';
import merge from 'lodash/merge';

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_REVIEW:
      let review = action.review.review;
      newState = {[review.id]: review};
      return merge({}, state, newState);
    case RECEIVE_REVIEWS:
      return action.reviews;
    case REMOVE_REVIEW:
      newState = merge({}, state);
      delete newState[action.review];
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
