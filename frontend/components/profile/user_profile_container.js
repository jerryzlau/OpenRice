import {connect} from 'react-redux';
import UserProfile from './user_profile';
import {requestUserReservations,
        requestRestaurantReservations} from '../../actions/reservation_actions';

const mapStateToProps = ({reservations, session}) => {
  return{
    currentUser: session.currentUser,
    reservations
  };
};

const mapDispatchToProps = dispatch => ({
  requestUserReservations: userId => dispatch(requestUserReservations(userId)),
  requestRestaurantReservations: reservations => dispatch(requestRestaurantReservations(reservations))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
