import React from 'react';
import Main from './main';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import RestaurantIndexContainer from './restaurant/restaurant_index_container';
import RestaurantShowContainer from './restaurant/restaurant_show_container';
import RestaurantSearch from './restaurant/restaurant_search/restaurant_search';

const App = () => (
  <div className="app-page">
    <nav className="nav-bar">
      <header>
        <a href='/' >
        <img src="http://res.cloudinary.com/jerryzlau/image/upload/v1505869835/openrice_logo_qusua1.png" />
      </a>
      <h2><GreetingContainer/></h2>
    </header>
      <AuthRoute path="/login" component={SessionFormContainer} />
      {/* <AuthRoute path="/" component={SessionFormContainer} /> */}
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </nav>

    <Main />


    {/* <ProtectedRoute path='/' component={GreetingContainer} /> */}
  </div>
);

export default App;
