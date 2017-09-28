import { connect } from 'react-redux';
import {createRestaurant} from '../../actions/restaurant_actions';
import RestaurantForm from './restaurant_form';

const mapStateToProps = ({ restaurants, session, errors }) => {
  return {
    currentUser: session.currentUser,
    errors: errors.restaurant
  };
};

const mapDispatchToProps = dispatch => ({
  createRestaurant: restaurant => dispatch(createRestaurant(restaurant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantForm);
