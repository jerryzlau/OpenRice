import React from 'react';
import {Link} from 'react-router-dom';
import ReservationIndexItem from '../reservations/reservation_index_item';
// import ReservationIndex from '../reservations/reservation_index';
import ReviewIndexItem from '../review/review_index_item';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   reservations: this.props.reservations
    // };

    this.reservationIndex = this.reservationIndex.bind(this);
    this.reservationChecker = this.reservationChecker.bind(this);
    this.reviewIndex = this.reviewIndex.bind(this);
    this.reviewChecker = this.reviewChecker.bind(this);
  }

  componentWillMount(){
    if(this.props.currentUser){
      this.props.requestUserReservations(this.props.currentUser.id);
      this.props.requestUserReviews(this.props.currentUser.id);
    }
  }

  destroyReservation(idx){
    //Find a way to re-render after delete
    return (e) => {
      e.preventDefault();
      this.props.destroyReservation(idx);
      // let reservations = this.state.reservations;
      // delete reservations[idx];
      // this.setState({reservations});
    };
  }

  reservationIndex(){
    return Object.keys(this.props.reservations).map(idx => (
      <div className="profile-reservations">
        <div className="profile-reservations-top">
          <Link
            to={`/restaurants/${this.props.reservations[idx].restaurant.id}`}>
            {this.props.reservations[idx].restaurant.name}
          </Link>
          <button type="button"
                  onClick={this.destroyReservation(idx)}
                  className="cancel-reservation">
                  Cancel
          </button>
        </div>
        <ReservationIndexItem key={idx}
          reservation={this.props.reservations[idx]} />
      </div>
    ));
  }

  reservationChecker(){
    let reservations = this.reservationIndex();
    if (reservations.length > 0){
      return reservations;
    }else{
      return(
        <p>No reservations</p>
      );
    }
  }

  reviewIndex(){
    console.log(this.props.reviews);
    return Object.keys(this.props.reviews).map(idx => (
      <div className="profile-user-reviews">
        <Link to={`/restaurants/${this.props.reviews[idx].restaurant.id}`}>
          {this.props.reviews[idx].restaurant.name}
        </Link>
        <ReviewIndexItem key={idx}
          review={this.props.reviews[idx]} />
      </div>
    ));
  }

  reviewChecker(){
    let reviews = this.reviewIndex();
    if (reviews.length > 0){
      return reviews;
    }else{
      return(
        <p>You didn't make any reviews</p>
      );
    }
  }

  render(){
    return(
      <div>
        <h1 className="profile-header">
          Hi {this.props.currentUser.first_name.capitalize()}!
        </h1>

        <div className="profile-container">
          <div className="profile-components profile-info">
            <h2>User Info</h2><hr/>
            <span>
              Email: {this.props.currentUser.email}
            </span><br/>
            <span>
              Primary Location: {this.props.currentUser.primary_city.capitalize()}
            </span>
          </div>

          <div className="profile-components">
            <h2>Reservations</h2><hr/>
            {this.reservationChecker()}
          </div>

          <div className="profile-components profile-reviews">
            <h2>Reviews</h2><hr/>
            {this.reviewChecker()}
          </div>

        </div>
      </div>
    );

  }
}

export default UserProfile;

{/* <ReservationIndex
  reservations={this.props.reservations}
  currentUser={this.props.currentUser}
  restaurantId={this.props.reservations.restaurant_id}
  requestRestaurantReservations={this.props.requestRestaurantReservations}/> */}
