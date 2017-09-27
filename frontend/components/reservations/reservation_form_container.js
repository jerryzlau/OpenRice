import {connect} from 'react-redux';
import {createReservation,
        editReservation,
        destroyReservation} from '../../actions/reservation_actions';
import ReservationForm from './reservation_form';

//TODO: take out restaurants later if it's not used
const mapStateToProps = ({restaurants, session}) => {
  return {
    currentUser: session.currentUser,
    restaurants: restaurants
  };
};

const mapDispatchToProps = dispatch => ({
  createReservation: reservation => dispatch(createReservation(reservation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationForm);
