import { connect } from 'react-redux';
import { requestAllRestaurants,
         requestRestaurant,
         createRestaurant,
         destroyRestaurant,
         editRestaurant,
         searchRestaurants} from '../../../actions/restaurant_actions';
import RestaurantSearch from './restaurant_search';

const mapDispatchToProps = dispatch => ({
  searchRestaurants: searchKeyword => dispatch(searchRestaurants(searchKeyword))
});

export default connect(
  null,
  mapDispatchToProps
)(RestaurantSearch);
