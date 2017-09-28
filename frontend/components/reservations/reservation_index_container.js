import {connect} from 'react-redux';
import {requestRestaurantReservations
        } from '../../actions/reservation_actions';
import ReservationIndex from './reservation_index';

const mapStateToProps = (state, ownProps) => {
  return{
    currentUser: state.session.currentUser,
    restaurantId: ownProps.match.params.restaurantId,
    reservations: state.reservations
  };
};

const mapDispatchToProps = dispatch => ({
  requestRestaurantReservations: reservations => dispatch(requestRestaurantReservations(reservations))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationIndex);
