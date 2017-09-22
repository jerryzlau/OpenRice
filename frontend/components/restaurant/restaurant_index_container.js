import { connect } from 'react-redux';
import { requestAllRestaurants,
         requestRestaurant,
         createRestaurant,
         destroyRestaurant,
         editRestaurant} from '../../actions/restaurant_actions';
import RestaurantIndex from './restaurant_index';

const mapStateToProps = ({ restaurants }) => {
  return {
    restaurants
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllRestaurants: () => dispatch(requestAllRestaurants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);
