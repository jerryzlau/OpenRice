import React from 'react';
import Main from './main';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch, Link} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import RestaurantShowContainer from './restaurant/restaurant_show_container';
import RestaurantSearch from './restaurant/restaurant_search/restaurant_search';

const App = () => (
  <div className="app-page">
    <nav className="nav-bar">
      <div className="nav-bar-left">
        <Link to="/">
        <img className="logo"
             src="http://res.cloudinary.com/jerryzlau/image/upload/v1505869835/openrice_logo_qusua1.png" />
        </Link>
      </div>

      <div className="nav-bar-right">
        <GreetingContainer/>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </div>
    </nav>

    <Main />
    {/* <ProtectedRoute path='/' component={GreetingContainer} /> */}
  </div>
);

export default App;
