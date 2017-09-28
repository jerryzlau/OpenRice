import React from 'react';
import {Route} from 'react-router-dom';
import ReservationFormContainer from '../reservations/reservation_form_container';
import ReservationIndexContainer from '../reservations/reservation_index_container';
import ReviewFormContainer from '../review/review_form_container';
import ReviewIndexContainer from '../review/review_index_container';
import {createFavorite,
        destroyFavorite,
        fetchFavorite} from '../../util/favorite_api_util';


class RestaurantShow extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      liked: false
    };

    this.toggle = this.toggle.bind(this);
    this.heartButton = this.heartButton.bind(this);
  }

  componentWillMount(){
    this.props.requestRestaurant(this.props.match.params.restaurantId)
              .then(restaurant => {
                return(this.setState({
                liked: restaurant.restaurant.restaurant.favorited
              }));});
    window.scrollTo(0,0);
  }

  toggle(){
    this.setState({
      liked: !this.state.liked
    });

    let favorite = {
      restaurant_id: this.props.restaurant.id,
      customer_id: this.props.currentUser.id
    };

    if (!this.state.liked){
      createFavorite(favorite);
    }else{
      destroyFavorite(favorite);
    }
  }

  heartButton(){
    if (this.props.currentUser){
      if(this.state.liked){
        return(
          <div className="heart-button-short" onClick={this.toggle}>
            <i className="fa fa-heart"></i>
            Favorited
          </div>
        );
      }else{
        return(
          <div className="heart-button-long" onClick={this.toggle}>
            <i className="fa fa-heart"></i>
            Add to Favorites
          </div>
        );
      }
    }else{
      return;
    }
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

        let num_reviews = this.props.restaurant.reviews.length;

      return(
        <div className="rest-show">
          <div className="rest-show-header">
            <img src={image_url} />

            <div className="rest-show-header-right">
              <div className="rest-show-name-reviews">
                <span className="rest-name">{name}
                </span>&nbsp;&nbsp;&nbsp;
                {num_reviews} {num_reviews < 2 ? "review" : "reviews"}
              </div>

              <div className="rest-show-header-right-sub">
                <div className="rest-show-header-right-left">
                  <span className="rest-show-header-cusine">{cusine_type}</span>
                  <span className="rest-show-header-address">{address}</span><br/>
                  <span className="rest-show-header-price">${end_price} and under</span>
                </div>
                {this.heartButton()}
              </div>
            </div>
          </div>

          <div className="rest-show-body">
            <div className="rest-show-reservation">
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
            </div>


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

                {/* <div className="rest-show-map">

                </div> */}
              </div>

                <div className="rest-show-review-component">
                  {
                    (this.props.currentUser
                      && this.props.currentUser.id !== owner_id) ?
                      <Route path={'/restaurants/:restaurantId'}
                      component={ReviewFormContainer}/>
                      :
                      <p></p>
                    }

                    <Route path={'/restaurants/:restaurantId'}
                    component={ReviewIndexContainer} />
                </div>

          </div>
        </div>
      );
    }
  }
}

export default RestaurantShow;
