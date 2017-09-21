import { connect } from 'react-redux';
import { requestAllRestaurants,
         requestRestaurant,
         createRestaurant,
         destroyRestaurant,
         editRestaurant} from '../../actions/restaurant_actions';
import Restaurant from './restaurant';

const mapStateToProps = ({ restaurants }) => {
  // debugger
  return {
    restaurants
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllRestaurants: () => dispatch(requestAllRestaurants()),
  requestRestaurant: (restaurantId) => dispatch(requestRestaurant(restaurantId)),
  createRestaurant: (restaurant) => dispatch(createRestaurant(restaurant)),
  destroyRestaurant: (restaurantId) => dispatch(destroyRestaurant(restaurantId)),
  editRestaurant: (restaurant) => dispatch(editRestaurant(restaurant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Restaurant);
