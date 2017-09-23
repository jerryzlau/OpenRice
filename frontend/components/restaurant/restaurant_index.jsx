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
          <img src="http://media.otstatic.com/img/start_hero_images/us-hero-1040-b6f1b6d8171974a2ae4256a619fd5030.jpg"/>
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