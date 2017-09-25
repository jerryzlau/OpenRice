import React from 'react';

class ReservationIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestRestaurantReservations();
  }

  render(){
    return(
      <div>

      </div>
    );
  }
}

export default ReservationIndex;
