import {connect} from 'react-redux';
import {createReservation,
        editReservation,
        destroyReservation,
        clearReservationErrors} from '../../actions/reservation_actions';
import ReservationForm from './reservation_form';

//TODO: take out restaurants later if it's not used
const mapStateToProps = ({restaurants, session, errors}) => {
  return {
    currentUser: session.currentUser,
    restaurants: restaurants,
    errors: errors.reservations
  };
};

const mapDispatchToProps = dispatch => ({
  createReservation: reservation => dispatch(createReservation(reservation)),
  clearReservationErrors: () => dispatch(clearReservationErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationForm);
