import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import RestaurantSearch from './restaurant_search/restaurant_search';
import RestaurantSearchContainer from './restaurant_search/restaurant_search_container';
import { Route, Switch, withRouter} from 'react-router-dom';

class RestaurantIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllRestaurants();
    window.scrollTo(0,0);
  }

  indexEl(){
    let index = Object.keys(this.props.restaurants).map(idx => (
      <RestaurantIndexItem key={idx}
        restaurant={this.props.restaurants[idx]} />
    ));

    return(
      <div className="home-page">
        <div className="home-img">
          <img src="https://res.cloudinary.com/jerryzlau/image/upload/v1506382488/home_page_image_deu2vc.jpg"/>
        </div>
        <Route path='/' component={RestaurantSearchContainer} />
        <div className="rest-index">
          <h1>Restaurants</h1>
          <div className="rest-index-inside">
            {index}
          </div>
        </div>
      </div>
    );
  }

  render(){
    return this.indexEl();
  }
}

export default RestaurantIndex;
