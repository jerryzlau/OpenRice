import React from 'react';
// import moment from 'moment';
// import TimePicker from 'rc-time-picker';
// import DatePicker from 'react-datepicker';

class ReservationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      customer_id: "",
      restaurant_id: this.props.match.params.restaurantId,
      num_ppl: 2,
      book_time: "",
      book_date: "",
      notes: "No special request at the moment.",
      booking: ""
    };

    //form action
    this.handleSubmit = this.handleSubmit.bind(this);

    //error handling
    this.renderErrors = this.renderErrors.bind(this);

    //helper methods
    this.timePickerBuilder = this.timePickerBuilder.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();


    this.state.booking = this.state.book_date + " " + this.state.book_time;

    console.log(this.state.booking);
    if(this.props.currentUser){
      this.state.customer_id = this.props.currentUser.id;
    }

    let fetchInfo = {
      customer_id: this.state.customer_id,
      restaurant_id: this.state.restaurant_id,
      num_ppl: this.state.num_ppl,
      notes: this.state.notes,
      booking: this.state.book_date + " " + this.state.book_time
    };

    this.props.createReservation(fetchInfo);
    // this.props.history.push("/my/profile/info");
  }

  renderErrors() {
    if (this.props.errors !== []){
      return(
        <ul className="reservation-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} >
              {error}
            </li>
          ))}
        </ul>
      );
    } else {
      return;
    }
  }

  timePickerBuilder(){
    let dayTime = [];
    let nightTime = [];

    for(let i = 0; i < 12; i++){
      if (i === 0){
        dayTime.push(12);
        nightTime.push(12);
      } else {
        dayTime.push(i);
        nightTime.push(i);
      }
    }

    let newDayTime = dayTime.map(time => (
      <option
        key={time+12}
        value={time < 10 ? (time + 12 + ":00") : (time + 12 + ":00")}
        >
        {time < 10 ? ("0" + time + ":00") : (time + ":00")} PM
      </option>
    ));

    let newNightTime = nightTime.map(time => (
      <option
        key={time}
        value={
                (time === 12) ?
                  "00:00" : (
                    time < 10 ?
                    ("0" + time + ":00") :
                    (time + ":00")
                  )
              }
        >
        {time < 10 ? ("0" + time + ":00") : (time + ":00")} AM
      </option>
    ));

    return newNightTime.concat(newDayTime);
  }

  render(){
    let date = new Date();
    let minDate = date.toISOString().slice(0,10);
    return(
      <div className="rest-show-background">
        <h1>Make a reservation</h1>
        {this.renderErrors()}
        <form className="reservation-form">
          <input type="number"
            min="1"
            value={this.state.num_ppl}
            onChange={this.update('num_ppl')}
            className="reservation-input"
          /><br/>

          <select className="reservation-input"
                  onChange={this.update('book_time')}>
            {this.timePickerBuilder()}
          </select>

          <input type="date"
            min={minDate}
            value={this.state.book_date}
            onChange={this.update('book_date')}
            className="reservation-input"
          />

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
