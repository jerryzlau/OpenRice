import {RECEIVE_REVIEW,
        RECEIVE_REVIEW_ERRORS,
        CLEAR_REVIEW_ERRORS,
        RECEIVE_REVIEWS} from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_REVIEWS:
    case CLEAR_REVIEW_ERRORS:
    case RECEIVE_REVIEW:
      return [];
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default ReviewErrorsReducer;
