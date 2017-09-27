import React from 'react';
import ReservationIndexItem from '../reservations/reservation_index_item';
import ReservationIndex from '../reservations/reservation_index';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if(this.props.currentUser){
      this.props.requestUserReservations(this.props.currentUser.id);
    }
  }

  render(){
    console.log(this.props);
    return(
      <div className="profile-container">
        {/* <h1>This is the user profile</h1> */}
        <ReservationIndex
          reservations={this.props.reservations}
          currentUser={this.props.currentUser}
          restaurantId={this.props.reservations.restaurant_id}
          requestRestaurantReservations={this.props.requestRestaurantReservations}/>
      </div>
    );

  }
}

export default UserProfile;
