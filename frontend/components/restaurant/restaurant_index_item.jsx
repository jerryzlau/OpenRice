import React from 'react';
import {Link} from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.restaurant = this.props.restaurant;
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
        <li style={{color: 'black'}}>$</li>
        <li
          style={{color: `${diff > 40 ? 'black' : 'grey'}`}}>
          $</li>
        <li
          style={{color: `${diff > 100 ? 'black' : 'grey'}`}}>
          $</li>
        <li
          style={{color: `${diff > 200 ? 'black' : 'grey'}`}}>
          $</li>

      </ul>
    );
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
            <span>Stars</span>
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
