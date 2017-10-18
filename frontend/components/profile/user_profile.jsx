import React from 'react';
import {Link} from 'react-router-dom';
import ReservationIndexItem from '../reservations/reservation_index_item';
import ReviewIndexItem from '../review/review_index_item';
import RestaurantIndexItem from '../restaurant/restaurant_index_item';

class UserProfile extends React.Component {
  constructor(props){
    super(props);

    this.reservationIndex = this.reservationIndex.bind(this);
    this.reservationChecker = this.reservationChecker.bind(this);
    this.reviewIndex = this.reviewIndex.bind(this);
    this.reviewChecker = this.reviewChecker.bind(this);
    this.favoriteIndex = this.favoriteIndex.bind(this);
    this.favoriteChecker = this.favoriteChecker.bind(this);
  }

  componentWillMount(){
    if(this.props.currentUser){
      this.props.requestUserReservations(this.props.currentUser.id);
      this.props.requestUserReviews(this.props.currentUser.id);
    }
  }

  destroyReservation(idx){
    return (e) => {
      e.preventDefault();
      this.props.destroyReservation(idx);
    };
  }

  reservationIndex(){
    return Object.keys(this.props.reservations).map(idx => (
      <div className="profile-reservations">
        <div className="profile-reservations-top">
          <Link
            key={idx}
            to={`/restaurants/${this.props.reservations[idx].restaurant.id}`}
            className="reservation-index-item-link">
            <p>{this.props.reservations[idx].restaurant.name}</p>
          </Link>
          <button type="button"
                  onClick={this.destroyReservation(idx)}
                  className="cancel-reservation">
                  Cancel
          </button>
        </div>
        <ReservationIndexItem 
          key={idx}
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
    return Object.keys(this.props.reviews).map(idx => (
      <div className="profile-user-reviews">
        <Link 
          to={`/restaurants/${this.props.reviews[idx].restaurant.id}`}>
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

  favoriteIndex(){
    let restaurants = [];
    this.props.favoriteRestaurants.forEach(restaurant => (
      restaurants.push(
      <RestaurantIndexItem
        key={restaurant.id}
        restaurant={restaurant} />
      )
    ));
    return restaurants;
  }

  favoriteChecker(){
    let restaurants = this.favoriteIndex();
    if (restaurants.length > 0){
      return restaurants;
    }else{
      return(
        <p>You didn't favorite any restaurants</p>
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
            <h2>Your Reviews</h2><hr/>
            {this.reviewChecker()}
          </div>

          <div className="profile-components">
            <h2>Favorite Restaurants</h2><hr/>
            {this.favoriteChecker()}
          </div>

        </div>
      </div>
    );

  }
}

export default UserProfile;
