import React from 'react';
import ReservationIndexItem from '../reservations/reservation_index_item';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="profile-container">
        <h1>This is the user profile</h1>
      </div>
    );
  }
}

export default UserProfile;
