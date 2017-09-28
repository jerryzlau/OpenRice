import {connect} from 'react-redux';
import UserProfile from './user_profile';
import {requestUserReservations,
        requestRestaurantReservations,
        destroyReservation} from '../../actions/reservation_actions';
import {requestUserReviews} from '../../actions/review_actions';

const mapStateToProps = ({reservations, session, reviews}) => {
  return{
    currentUser: session.currentUser,
    reservations,
    reviews,
    favoriteRestaurants: session.currentUser.favorite_restaurants
  };
};

const mapDispatchToProps = dispatch => ({
  requestUserReservations: userId => dispatch(requestUserReservations(userId)),
  requestUserReviews: userId => dispatch(requestUserReviews(userId)),
  destroyReservation: reservationId => dispatch(destroyReservation(reservationId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
