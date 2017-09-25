import React from 'react';

class ReservationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      customer_id: this.props.currentUser.id,
      restaurant_id: this.props.match.params.restaurantId,
      num_ppl: "",
      book_time: "",
      book_date: "",
      notes: ""
    };
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return(
      <div>

      </div>
    );
  }
}

export default ReservationForm;
