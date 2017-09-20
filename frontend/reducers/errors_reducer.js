import {combineReducers} from 'redux';
import SessionReducer from './session_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionReducer
});

export default ErrorsReducer;
