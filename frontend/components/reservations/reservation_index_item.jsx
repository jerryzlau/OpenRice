import React from 'react';

class ReservationIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.reservation = this.props.reservation;
    // this.stringToDate = stringToDate.bind(this);
    // this.stringToTime = stringToTime.bind(this);
  }

  stringToTime(time){
    return time.slice(11,16);
  }

  stringToDate(date){
    return date.slice(0,10);
  }

  render(){
    let {book_time, book_date, notes, num_ppl} = this.reservation;
    let {first_name, last_name, email} = this.reservation.customer;
    return(
      <div className="reservation-index-item">
        <div className="reservation-customer-info">
          <div className="reservation-cusomter-name">
            <span>Customer: {first_name}</span>
            <span> {last_name}</span>
          </div>
          <a href={`mailto:${email}`} title={email}>
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </div>

        <div className="reservation-stats">
          <span>Number of people: {num_ppl}</span>
          <span>Date: {this.stringToDate(book_date)}</span>
          <span>Time: {this.stringToTime(book_time)}</span>
          <span>Special request: {notes}</span>
        </div>
      </div>
    );
  }
}

export default ReservationIndexItem;
