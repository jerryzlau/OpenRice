import React from 'react';

class RestaurantForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      owner_id: this.props.currentUser.id,
      start_price: "",
      end_price: "",
      capacity: "",
      address: "",
      cusine_type: "",
      phone_num: "",
      website: "",
      dining_style: "",
      description: "",
      open_time: "",
      close_time: "",
      image_url: ""
    };

    //form action
    this.handleSubmit = this.handleSubmit.bind(this);

    //error handling
    this.renderErrors = this.renderErrors.bind(this);

    //helper methods
    this.timePickerBuilder = this.timePickerBuilder.bind(this);
  }

  componentDidMount(){
    this.props.clearRestaurantErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createRestaurant(this.state)
              .then(data => this.props.history.push(`/restaurants/${data.restaurant.restaurant.id}`));
  }

  renderErrors() {
    if (this.props.errors !== []){
      return(
        <ul className="rest-errors">
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
    let {first_name, id} = this.props.currentUser;
    return(
      <div className="rest-form-background">
        <div className="rest-form">
          <h2>Hello {first_name.capitalize()}! Let's get you started with OpenRice</h2>
          <p>Tell us a little about you and your restaurant, and
            we'll provide you with information
          about OpenRice's products and services.
          Or, give us a ring at (123)456-7890</p><hr/>

          {this.renderErrors()}
          <form className="rest-form-input">
            <div className="rest-form-row">
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="signup-input"
                placeholder="Restaurant Name"
              />
              <br/>

              <input type="tel"
                value={this.state.phone_num}
                onChange={this.update('phone_num')}
                className="signup-input"
                placeholder="Restaurant Phone Number"
              />
              <br/>
            </div>

            <div className="rest-form-row">
              <input type="text"
                value={this.state.cusine_type}
                onChange={this.update('cusine_type')}
                className="signup-input"
                placeholder="Cusine Type"
              />
              <br/>

              <input type="text"
                value={this.state.dining_style}
                onChange={this.update('dining_style')}
                className="signup-input"
                placeholder="Dining Style"
              />
              <br/>
            </div>

            <div className="rest-form-row">
              <input type="number"
                min="1"
                value={this.state.start_price}
                onChange={this.update('start_price')}
                className="signup-input"
                placeholder="Minumum Charge"
              />
              <br/>

              <input type="number"
                min="1"
                value={this.state.end_price}
                onChange={this.update('end_price')}
                className="signup-input"
                placeholder="Maximum food item price"
              />
              <br/>
            </div>

            <div className="rest-form-row">
              <input type="text"
                value={this.state.address}
                onChange={this.update('address')}
                className="signup-input"
                placeholder="Restaurant Address"
              />
              <br/>

              <input type="url"
                value={this.state.website}
                onChange={this.update('website')}
                className="signup-input"
                placeholder="Restaurant Website"
              />
              <br/>
            </div>

            <div className="rest-form-row-time">
              <div className="rest-form-row-time-col">
                <p className="rest-form-time">Open Time:</p><br/>
                <select className="reservation-input rest-form-time-selector"
                  onChange={this.update('open_time')}>
                  {this.timePickerBuilder()}
                </select>
              </div>

              <div className="rest-form-row-time-col">
                <p className="rest-form-time">Close Time:</p><br/>
                <select className="reservation-input rest-form-time-selector"
                  onChange={this.update('close_time')}>
                  {this.timePickerBuilder()}
                </select>
              </div>
            </div>

            <div className="rest-form-capacity">
              <input type="number"
                min="1"
                value={this.state.capacity}
                onChange={this.update('capacity')}
                className="signup-input"
                placeholder="Restaurant capacity"
              />
              <br/>
            </div>


            <div className="rest-form-body-container">
              <textarea type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="rest-form-body"
                placeholder="Tell us about your restaurant"
              />
            </div>

             <div className="rest-form-submit">
               <input onClick={this.handleSubmit}
                 type="submit"
                 className="button"
                 value="Create Restaurant" />
             </div>

             {/* TODO: Add upload image capability after MVP */}

          </form>

        </div>
      </div>

    );
  }
}

export default RestaurantForm;
