import {combineReducers} from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import restaurants from './restaurant_reducer';
import reservations from './reservation_reducer';
import reviews from './review_reducer';
//TODO: link reducers and actions here

const RootReducer = combineReducers({
  session,
  reservations,
  restaurants,
  reviews,
  errors
});

export default RootReducer;
