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
  }

  indexEl(){
    let index = Object.keys(this.props.restaurants).map(idx => (
      <RestaurantIndexItem key={idx}
        restaurant={this.props.restaurants[idx]} />
    ));

    return(
      <div className="rest-index">
        <div className="home-img">
          <img src="http://res.cloudinary.com/jerryzlau/image/upload/v1506382488/home_page_image_deu2vc.jpg"/>
        </div>
        <Route path='/' component={RestaurantSearchContainer} />
        <h1>Restaurants</h1>
        {index}
      </div>
    );
  }

  render(){
    return this.indexEl();
  }
}

export default RestaurantIndex;
