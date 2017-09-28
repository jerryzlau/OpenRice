import {combineReducers} from 'redux';
import SessionReducer from './session_errors_reducer';
import RestaurantErrorsReducer from './restaurant_errors_reducer';
import ReservationErrorsReducer from './reservation_errors_reducer';
import ReviewErrorsReducer from './review_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionReducer,
  restaurant: RestaurantErrorsReducer,
  reservations: ReservationErrorsReducer,
  reviews: ReviewErrorsReducer
});

export default ErrorsReducer;
