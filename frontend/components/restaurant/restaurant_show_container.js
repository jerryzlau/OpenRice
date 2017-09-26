import { connect } from 'react-redux';
import { requestAllRestaurants,
         requestRestaurant,
         createRestaurant,
         destroyRestaurant,
         editRestaurant} from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show';

const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: state.restaurants[ownProps.match.params.restaurantId],
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  requestRestaurant: restaurantId => (
    dispatch(requestRestaurant(restaurantId))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantShow);
