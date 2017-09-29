import {connect} from 'react-redux';
import {createReview,
        editReview,
        destroyReview,
        clearReviewErrors} from '../../actions/review_actions';
import ReviewForm from './review_form';


const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: state.restaurants[ownProps.match.params.restaurantId],
    currentUser: state.session.currentUser,
    errors: state.errors.reviews
  };
};

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  clearReviewErrors: () => dispatch(clearReviewErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
