import React from 'react';

class RestaurantTimeSlot extends React.Component {
  constructor(props){
    super(props);
  }

  timeSlots(){
    return(
      <div className="rest-index-item-timeslots">

      </div>
    );
  }

  render(){
    return(
      <div>
        {this.timeSlots()}
      </div>
    );
  }
}

export default RestaurantTimeSlot;
