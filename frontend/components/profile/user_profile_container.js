import {connect} from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = ({session}) => {
  return{
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapDispatchToProps,
  mapDispatchToProps
)(UserProfile);
