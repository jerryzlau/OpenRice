import { connect } from 'react-redux';
import { requestAllRestaurants,
         requestRestaurant,
         createRestaurant,
         destroyRestaurant,
         editRestaurant} from '../../actions/restaurant_actions';
import RestaurantForm from './restaurant_form';

const mapStateToProps = ({ restaurants, session }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  createRestaurant: restaurant => dispatch(createRestaurant(restaurant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantForm);