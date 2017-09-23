import React from 'react';
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import RestaurantShowContainer from './restaurant/restaurant_show_container';
import RestaurantFormContainer from './restaurant/restaurant_form_container';
import RestaurantSearch from './restaurant/restaurant_search/restaurant_search';
import { Route, Switch, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

class Main extends React.Component {
  // TODO: might need to add Switch later
  render(){
    return(
      <div className="main-component">
          <Route
            path='/restaurants/:restaurantId'
            component={RestaurantShowContainer}/>
          <Route exact path='/' component={RestaurantIndexContainer} />
          <Route exact path='/restaurants' component={RestaurantFormContainer}/>

      </div>
    );
  }
}

export default withRouter(connect()(Main));
