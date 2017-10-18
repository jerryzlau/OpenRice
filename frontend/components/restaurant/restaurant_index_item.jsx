import React from 'react';
import {Link} from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.restaurant = this.props.restaurant;
    this.renderRating = this.renderRating.bind(this);
    this.getTime();
  }

  getTime(){
    let {open_time, close_time} = this.restaurant;
    let openTime = open_time.slice(11,16);
    let closeTime = close_time.slice(11,16);
    this.restaurant.open_time = openTime;
    this.restaurant.close_time = closeTime;
    this.currentTime = new Date().getHours();
  }

  getPriceRange(){
    let {start_price, end_price} = this.restaurant;
    let diff = end_price - start_price;

    return(
      <ul className="rest-index-item-price-range">
        <li style={{color: 'red'}}>$</li>
        <li
          style={{color: `${diff > 40 ? 'red' : 'grey'}`}}>
          $</li>
        <li
          style={{color: `${diff > 100 ? 'red' : 'grey'}`}}>
          $</li>
        <li
          style={{color: `${diff > 200 ? 'red' : 'grey'}`}}>
          $</li>

      </ul>
    );
  }

  renderRating(){ 
    let average = 0;
    if (this.props.restaurant.reviews){
      this.props.restaurant.reviews.forEach(review => {
        let { food, ambience, service, value } = review;
        average += (food + ambience + service + value) / 4;
      });
  
      average = average/this.props.restaurant.reviews.length;
  
      if (average < 2) {
        return (
          <img className="rest-star" src="https://res.cloudinary.com/jerryzlau/image/upload/v1506536943/Screen_Shot_2017-09-27_at_11.27.21_AM_k9rjyb.png" />
        );
      } else if (average < 3) {
        return (
          <img className="rest-star" src="https://res.cloudinary.com/jerryzlau/image/upload/v1506536943/Screen_Shot_2017-09-27_at_11.27.29_AM_dckc6z.png" />
        );
      } else if (average < 4) {
        return (
          <img className="rest-star" src="https://res.cloudinary.com/jerryzlau/image/upload/v1506536943/Screen_Shot_2017-09-27_at_11.27.54_AM_kamgwq.png" />
        );
      } else if (average < 5) {
        return (
          <img className="rest-star" src="https://res.cloudinary.com/jerryzlau/image/upload/v1506536943/Screen_Shot_2017-09-27_at_11.28.09_AM_z3mldb.png" />
        );
      } else {
        return (
          <img className="rest-star" src="https://res.cloudinary.com/jerryzlau/image/upload/v1506537154/Screen_Shot_2017-09-27_at_11.32.12_AM_m4hzrn.png" />
        );
      }
    }else{
      return (
        <img className="rest-star" src="https://res.cloudinary.com/jerryzlau/image/upload/v1506537154/Screen_Shot_2017-09-27_at_11.32.12_AM_m4hzrn.png" />
      );
    }
  }

  render(){
    let {name, cusine_type, address, id, image_url} = this.restaurant;
    return(
      <div className="rest-index-item">
        <div className="rest-index-item-left">
          <img
            className="rest-index-img"
            src={image_url}/>
        </div>

        <div className="rest-index-info">
          <Link to={`/restaurants/${id}`}>
            <p className="rest-index-item-link">{name.capitalize()}</p>
          </Link><br/>

          <div className="rest-index-item-top">
            <span>Rating: {this.renderRating()}</span>
            {this.getPriceRange()}
          </div>

          <div className="rest-index-item-middle">
            <span
              className="rest-index-item-cusine">
              {cusine_type.capitalize()}
            </span>

            <span>{address}</span>
          </div>

          {/* add time stuff when reservation form ready */}
          {/* <span>{this.restaurant.open_time}</span><br/>
          <span>{this.restaurant.close_time}</span><br/>
          <span>{this.currentTime}</span><br/> */}

        </div>
      </div>
    );
  }
}

export default RestaurantIndexItem;
