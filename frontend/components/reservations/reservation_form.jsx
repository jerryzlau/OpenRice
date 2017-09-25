import React from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

class ReservationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      customer_id: this.props.currentUser.id,
      restaurant_id: this.props.match.params.restaurantId,
      num_ppl: 2,
      book_time: "7:00 PM",
      book_date: moment().format("MMM Do YY"),
      notes: "No special request at the moment."
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createReservation(this.state);
  }

  render(){
    return(
      <div className="rest-show-background">
        <h1>Make a reservation</h1>
        <form className="reservation-form">
          <input type="number"
            value={this.state.num_ppl}
            onChange={this.update('num_ppl')}
            className="reservation-input"
          /><br/>

          <input type="time"
            value={this.state.book_time}
            onChange={this.update('book_time')}
            className="reservation-input"
          /><br/>

          <input type="date"
            value={this.state.book_date}
            onChange={this.update('book_date')}
            className="reservation-input"
          /><br/>

          <input type="submit"
            onClick={this.handleSubmit}
            value="Book a Table"
            className="submit-button reservation-submit"
          /><br/>


        </form>
      </div>
    );
  }
}

export default ReservationForm;
