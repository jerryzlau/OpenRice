import {connect} from 'react-redux';
import {requestRestaurantReservations
        } from '../../actions/reservation_actions';
import ReservationIndex from './reservation_index';

const mapStateToProps = ({restaurants, session, reservations}) => {
  return{
    currentUser: session.currentUser,
    restaurantId: restaurants[1].id,
    reservations: reservations
  };
};

const mapDispatchToProps = dispatch => ({
  requestRestaurantReservations: reservations => dispatch(requestRestaurantReservations(reservations))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationIndex);
