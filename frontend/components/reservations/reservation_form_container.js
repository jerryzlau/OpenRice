import {connect} from 'react-redux';
import {createReservation,
        editReservation,
        destroyReservation} from '../../actions/reservation_actions';
import ReservationForm from './restaurant_form';

const mapStateToProps = ({reservation, session}) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  createReservation: reservation => dispatch(createReservation(reservation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationForm);
