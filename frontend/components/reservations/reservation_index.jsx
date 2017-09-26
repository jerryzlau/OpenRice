import React from 'react';
import ReservationIndexItem from './reservation_index_item';

class ReservationIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    let fetchInfo = {
      userId: this.props.currentUser.id,
      restaurantId: this.props.match.params.restaurantId
    };
    this.props.requestRestaurantReservations(fetchInfo);
  }

  indexEl(){
    return Object.keys(this.props.reservations).map(idx => (
      <ReservationIndexItem key={idx}
        reservation={this.props.reservations[idx]} />
    ));
  }

  render(){
    return(
      <div className="reservation-index">
        <h1>Reservations</h1><hr/>
        {this.indexEl()}
      </div>
    );
  }
}

export default ReservationIndex;
