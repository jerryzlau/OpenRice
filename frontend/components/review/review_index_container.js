import {connect} from './react-redux';
import {requestRestaurantReviews} from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = ({restaurant, session}) => {
  return {
    restaurant: restaurant,
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  requestRestaurantReviews: reviews => dispatch(requestRestaurantReviews(reviews))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
