import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

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
        <h1>Reataurants</h1>
        {index}
      </div>
    );
  }

  render(){
    return this.indexEl();
  }
}

export default RestaurantIndex;
