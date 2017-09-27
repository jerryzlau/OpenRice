import React from 'react';
import ReservationIndexItem from './reservation_index_item';

class ReservationIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    let fetchInfo = {
      userId: this.props.currentUser.id,
      restaurantId: this.props.restaurantId
    };
    this.props.requestRestaurantReservations(fetchInfo);
  }

  indexEl(){
    return Object.keys(this.props.reservations).map(idx => (
      <ReservationIndexItem key={idx}
        reservation={this.props.reservations[idx]} />
    ));
  }

  ownerReservations(reservations){
    if (reservations.length === 0){
      return(
        <div>
          <p>You don't have any reservations at the moment</p>
        </div>
      );
    }else{
      return reservations;
    }
  }

  render(){
    return(
      <div className="reservation-index">
        <h1>Reservations</h1><hr/>
        {this.ownerReservations(this.indexEl())}
      </div>
    );
  }
}

export default ReservationIndex;
