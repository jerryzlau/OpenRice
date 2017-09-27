import React from 'react';
import {Route} from 'react-router-dom';
import ReservationFormContainer from '../reservations/reservation_form_container';
import ReservationIndexContainer from '../reservations/reservation_index_container';
import ReviewFormContainer from '../review/review_form_container';
import ReviewIndex from '../review/review_index';

class RestaurantShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestRestaurant(this.props.match.params.restaurantId);
  }

  render(){
    if (!this.props.restaurant){
      return(
        <div className="loading">
          <i className="fa fa-spinner fa-spin fa-5x" ></i><br/>
          <h3>OpenRice is connecting to restaurants and searching their
          computer reservation systems to find tables for you</h3>
        </div>
      );
    }else{
      let {name,
        image_url,
        description,
        address,
        capacity,
        cusine_type,
        phone_num,
        website,
        dining_style,
        open_time,
        close_time,
        start_price,
        end_price,
        owner,
        owner_id} = this.props.restaurant;

        cusine_type = cusine_type.capitalize();
        name = name.capitalize();
        dining_style = dining_style.capitalize();

      return(
        <div className="rest-show">
          <div className="rest-show-header">
            <img src={image_url} />

            <div className="rest-show-header-right">
              <span className="rest-name">{name}
                </span><br/>

              <div className="rest-show-header-right-sub">
                <div className="rest-show-header-right-left">
                  <span>{cusine_type}</span>
                  <span>{address}</span><br/>
                  <span>${end_price} and under</span>
                </div>
                {/* change this to Link when favorite is set up */}
                <div className="heart-button">
                  <i className="fa fa-heart-o">Add to favorite</i>
                </div>
              </div>
            </div>
          </div>

          <div className="rest-show-body">
            {
              (this.props.currentUser && this.props.currentUser.id === owner_id) ?
              <Route
                path={'/restaurants/:restaurantId'}
                component={ReservationIndexContainer}
              />
              :
              <Route
                path={`/restaurants/:restaurantId`}
                component={ReservationFormContainer}
              />
            }
{/* #################################################################################### */}
            <div className="rest-show-about rest-show-background">
              <h1>About {name}</h1>

              <div className="rest-show-about-el">
                <i className="fa fa-bell" aria-hidden="true" />
                <span> Dining Style:</span>
                <span> {dining_style}</span>
              </div>

              <div className="rest-show-about-el">
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                <span> Hours of Operation:</span>
                <span> Daily: {open_time.slice(11,16)} - {close_time.slice(11,16)}</span>
              </div>

              <div className="rest-show-about-el">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span> Phone Number: </span>
                <span> {phone_num}</span>
              </div>

              <div className="rest-show-about-el">
                <span>Cusines:</span>
                <span>{cusine_type}</span>
              </div>

              <div className="rest-show-about-el">
                <i className="fa fa-home" aria-hidden="true"></i>
                <span> Website: </span>
                <a href={website} title={name}>
                  <span className="website">
                    {website}</span>
                  </a>
                </div>

                <div className="rest-show-about-el">
                  <span>{description}</span>
                </div>

                <div className="rest-show-map">

                </div>

{/* #################################################################################### */}

                {
                  (this.props.currentUser
                    && this.props.currentUser.id !== owner_id) ?
                    <Route path={'/restaurants/:restaurantId'}
                    component={ReviewFormContainer}/>
                    :
                    <p>Can't write review</p>
                }

                <ReviewIndex reviews={this.props.restaurant.reviews}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default RestaurantShow;
